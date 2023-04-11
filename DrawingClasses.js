class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class DrawRegion {
  width;
  height;

  left;
  right;
  top;
  bottom;

  topleft;
  topright;
  bottomleft;
  bottomright;

  center;

  constructor(bottom, left, top, right) {
    this.width = right - left;
    this.height = bottom - top;

    this.left = left;
    this.right = right;
    this.top = top;
    this.bottom = bottom;

    this.topleft = new Point(this.left, this.top);
    this.topright = new Point(this.right, this.top);
    this.bottomleft = new Point(this.left, this.bottom);
    this.bottomright = new Point(this.right, this.bottom);

    this.center = new Point(this.left + this.width / 2, this.top + this.height / 2);
  }
}

class Margin {
  constructor(bottom, left, top, right) {
    this.bottom = bottom;
    this.left = left;
    this.top = top;
    this.right = right;
  }
}

class Padding {
  constructor(bottom, left, top, right) {
    this.bottom = bottom;
    this.left = left;
    this.top = top;
    this.right = right;
  }
}

class DrawSettings {
  constructor(axisLabelFont, tickLabelFont, axisLineWidth) {
    this.axisLabelFont = axisLabelFont;
    this.tickLabelFont = tickLabelFont;
    this.axisLineWidth = axisLineWidth;
  }
}

class LeftYAxis {
  tickPositions;
  
  constructor(axisLabel, axisRegion, tickLabels, axisColor, isLogarithmic) {
    this.axisLabel = axisLabel;
    this.axisRegion = axisRegion;
    this.tickLabels = tickLabels;
    this.axisColor = axisColor;

    const minValue = Math.min.apply(null, tickLabels);
    const maxValue = Math.max.apply(null, tickLabels);
    
    this.tickPositions = new Array();
    
    if (isLogarithmic) {
      const lowerLog = Math.log10(minValue);
      const upperLog = Math.log10(maxValue);
      
      for (let i = 0; i < tickLabels.length; i++) {
        const logPlasmaConc = Math.log10(tickLabels[i]);
        const fractionalPosition = (logPlasmaConc - lowerLog) / (upperLog - lowerLog);
        this.tickPositions.push(fractionalPosition * axisRegion.height);
      }
    } 
    else {
      for (let i = 0; i < tickLabels.length; i++) {
        this.tickPositions.push(tickLabels[i] / maxValue * axisRegion.height);
      }
    }
  }

  drawAxis = function(ctx, drawSettings, tickSize) {
    const lineWidth = drawSettings.axisLineWidth;
    
    ctx.strokeStyle = this.axisColor;
    ctx.fillStyle = this.axisColor;

    // Axis
    ctx.beginPath();
    ctx.moveTo(this.axisRegion.right, this.axisRegion.bottom + lineWidth/2);
    ctx.lineTo(this.axisRegion.right, this.axisRegion.top - lineWidth/2);
    ctx.stroke();

    // Tick marks
    ctx.font = drawSettings.tickLabelFont;
    ctx.textAlign = "right";

    for (let i = 0; i < this.tickPositions.length; i++) {
      let tickMarkYpos = this.tickPositions[i];
      let tickMarkLabel = this.tickLabels[i];

      ctx.beginPath();
      ctx.moveTo(this.axisRegion.right - tickSize, this.axisRegion.bottom - tickMarkYpos);
      ctx.lineTo(this.axisRegion.right, this.axisRegion.bottom - tickMarkYpos);
      ctx.stroke();

      ctx.fillText(tickMarkLabel, this.axisRegion.right - tickSize - 5, this.axisRegion.bottom - tickMarkYpos);
    }

    // Axis label
    ctx.font = drawSettings.axisLabelFont;
    ctx.textAlign = "center";
    
    const yLabel = this.axisLabel;

    var x = this.axisRegion.left + this.axisRegion.width / 5;
    var y = this.axisRegion.center.y;
  
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText(yLabel, 0, 0);
    ctx.restore();
  }
}

class RightYAxis {
  tickPositions;
  
  constructor(axisLabel, axisRegion, tickLabels, axisColor, isLogarithmic) {
    this.axisLabel = axisLabel;
    this.axisRegion = axisRegion;
    this.tickLabels = tickLabels;
    this.axisColor = axisColor;

    const minValue = Math.min.apply(null, tickLabels);
    const maxValue = Math.max.apply(null, tickLabels);
    
    this.tickPositions = new Array();

    if (isLogarithmic) {
      const lowerLog = Math.log10(minValue);
      const upperLog = Math.log10(maxValue);
      
      for (let i = 0; i < tickLabels.length; i++) {
        const logPlasmaConc = Math.log10(tickLabels[i]);
        const fractionalPosition = (logPlasmaConc - lowerLog) / (upperLog - lowerLog);
        this.tickPositions.push(fractionalPosition * axisRegion.height);
      }
    } 
    else {
      for (let i = 0; i < tickLabels.length; i++) {
        this.tickPositions.push(tickLabels[i] / maxValue * axisRegion.height);
      }
    }
  }

  drawAxis = function(ctx, drawSettings, tickSize) {
    const lineWidth = drawSettings.axisLineWidth;
    
    ctx.strokeStyle = this.axisColor;
    ctx.fillStyle = this.axisColor;

    // Axis
    ctx.beginPath();
    ctx.moveTo(this.axisRegion.left, this.axisRegion.bottom + lineWidth/2);
    ctx.lineTo(this.axisRegion.left, this.axisRegion.top - lineWidth/2);
    ctx.stroke();

    // Tick marks
    ctx.font = drawSettings.tickLabelFont;
    ctx.textAlign = "left";

    for (let i = 0; i < this.tickPositions.length; i++) {
      let tickMarkYpos = this.tickPositions[i];
      let tickMarkLabel = this.tickLabels[i];

      ctx.beginPath();
      ctx.moveTo(this.axisRegion.left, this.axisRegion.bottom - tickMarkYpos);
      ctx.lineTo(this.axisRegion.left + tickSize, this.axisRegion.bottom - tickMarkYpos);
      ctx.stroke();

      ctx.fillText(tickMarkLabel, this.axisRegion.left + tickSize + 5, this.axisRegion.bottom - tickMarkYpos);
    }

    // Axis label
    ctx.font = drawSettings.axisLabelFont;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    
    const yLabel = this.axisLabel;

    var x = this.axisRegion.center.x;
    var y = this.axisRegion.center.y;
  
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText(yLabel, 0, 0);
    ctx.restore();
  }
}

class XAxis {
  tickPositions;
  
  constructor(axisLabel, axisRegion, tickLabels, axisColor) {
    this.axisLabel = axisLabel;
    this.axisRegion = axisRegion;
    this.tickLabels = tickLabels;
    this.axisColor = axisColor;

    const maxValue = Math.max.apply(null, tickLabels);
    
    this.tickPositions = new Array();
    for (let i = 0; i < tickLabels.length; i++) {
      this.tickPositions.push(tickLabels[i] / maxValue * axisRegion.width);
    }
  }

  drawAxis = function(ctx, drawSettings, tickSize) {
    const lineWidth = drawSettings.axisLineWidth;
    
    ctx.strokeStyle = this.axisColor;
    ctx.fillStyle = this.axisColor;

    // Axis
    ctx.beginPath();
    ctx.moveTo(this.axisRegion.left - lineWidth / 2, this.axisRegion.top);
    ctx.lineTo(this.axisRegion.right + lineWidth / 2, this.axisRegion.top);
    ctx.stroke();

    // Tick marks
    ctx.font = drawSettings.tickLabelFont;
    ctx.textAlign = "center";
    ctx.textBaseline = "top";

    for (let i = 0; i < this.tickPositions.length; i++) {
      let tickMarkXpos = this.tickPositions[i];
      let tickMarkLabel = this.tickLabels[i];

      ctx.beginPath();
      ctx.moveTo(this.axisRegion.left + tickMarkXpos, this.axisRegion.top);
      ctx.lineTo(this.axisRegion.left + tickMarkXpos, this.axisRegion.top + tickSize);
      ctx.stroke();

      ctx.fillText(tickMarkLabel, this.axisRegion.left + tickMarkXpos, this.axisRegion.top + tickSize + 5);
    }

    // Axis label
    ctx.font = drawSettings.axisLabelFont;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    const xLabel = this.axisLabel;

    var x = this.axisRegion.center.x;
    var y = this.axisRegion.bottom - this.axisRegion.height / 5;
  
    ctx.fillText(xLabel, x, y);
  }
}

SetClipRegion = function(ctx, region) {
  ctx.beginPath();

  ctx.moveTo(region.left, region.bottom);  
  ctx.lineTo(region.left, region.top);
  ctx.lineTo(region.right, region.top);
  ctx.lineTo(region.right, region.bottom);

  ctx.clip();
}