// utils.js
export function calculateROI(initialValue, finalValue) {
    return ((finalValue - initialValue) / initialValue) * 100;
  }
  
  export function calculateCAGR(initialValue, finalValue, years) {
    return ((finalValue / initialValue) ** (1 / years) - 1) * 100;
  }
  
  export function calculateDrawdown(values) {
    let peak = values[0];
    let maxDrawdown = 0;
  
    values.forEach(value => {
      if (value > peak) peak = value;
      const drawdown = (peak - value) / peak * 100;
      if (drawdown > maxDrawdown) maxDrawdown = drawdown;
    });
  
    return maxDrawdown;
  }
  