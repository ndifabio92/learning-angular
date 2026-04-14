import { Component } from '@angular/core';
import { Calculator } from '../../components/calculator/calculator';

@Component({
  selector: 'calculator-view',
  imports: [Calculator],
  templateUrl: './calculator-view.html',
})
class CalculatorView {}

export default CalculatorView;
