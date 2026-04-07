import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-countries';
import { map, Observable, catchError, throwError, delay, of, tap, count } from 'rxjs';
import { Country } from '../interfaces/country';
import { CountryMapper } from '../mapper/country';
import { Region } from '../interfaces/region';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient);
  private queryCacheCapital = new Map<string, Country[]>();
  private queryCacheCountry = new Map<string, Country[]>();
  private queryCacheRegion = new Map<Region, Country[]>();

  searchByCapital(query: string): Observable<Country[]> {
    query = query.toLocaleLowerCase();

    if (this.queryCacheCapital.has(query)) {
      return of(this.queryCacheCapital.get(query) ?? []);
    }

    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`).pipe(
      map((restCountries) => CountryMapper.mapRestCountryArrayToCountryArray(restCountries)),
      tap((countries) => this.queryCacheCapital.set(query, countries)),
      catchError((error) => {
        return throwError(() => new Error('error fetch'));
      }),
    );
  }

  searchByCountry(query: string): Observable<Country[]> {
    const url = `${API_URL}/name/${query}`;
    query = query.toLocaleLowerCase();

    if (this.queryCacheCountry.has(query)) {
      return of(this.queryCacheCountry.get(query) ?? []);
    }

    return this.http.get<RESTCountry[]>(`${url}`).pipe(
      map((restCountries) => CountryMapper.mapRestCountryArrayToCountryArray(restCountries)),
      tap((countries) => this.queryCacheCountry.set(query, countries)),
      delay(2000),
      catchError((error) => {
        return throwError(() => new Error('error fetch'));
      }),
    );
  }

  searchCountryByAlphaCode(code: string) {
    const url = `${API_URL}/alpha/${code}`;

    return this.http.get<RESTCountry[]>(`${url}`).pipe(
      map((resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
      map((countries) => countries.at(0)),
      catchError((error) => {
        return throwError(() => new Error('error fetch'));
      }),
    );
  }

  searchByRegion(region: Region) {
    const url = `${API_URL}/region/${region}`;

    if (this.queryCacheCountry.has(region)) {
      return of(this.queryCacheCountry.get(region) ?? []);
    }

    return this.http.get<RESTCountry[]>(url).pipe(
      map((resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
      tap((countries) => this.queryCacheRegion.set(region, countries)),
      catchError((error) => {
        console.log('Error fetching ', error);

        return throwError(() => new Error(`No se pudo obtener países con ese query ${region}`));
      }),
    );
  }
}
