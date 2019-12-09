(function()  {
let tmpl = document.createElement('template');
tmpl.innerHTML = `
  <style>

  <div class="container">
  <div class="gauge-base">
    <div class="gauge">
      <div class="mask"></div>
      <div class="needle"></div>
      <div class="spinner"></div>
    </div>
    <p class="label">Squeeze-o-meter</p>
    <div class="number">43.00</div>
  </div>
</div>

.container {
	position: relative;
	width: 400px;
	margin: 50px auto 0;
	overflow: hidden;
  }
  
  .gauge-base {
	position: relative;
	width: 400px;
	height: 400px;
	background: #323232;
	border-radius: 400px;
	overflow: hidden;
	box-shadow: 0 1px 5px rgba(0,0,0,0.5);
	margin: 0 auto;
	
	.label {
	  color: #fff;
	  text-transform: uppercase;
	  text-align: center;
	  font-family: 'Alfa Slab One';
	  letter-spacing: 5px;
	  text-shadow: 2px 2px 2px rgba(0,0,0,0.5);
	  margin-bottom: 20px;
	}
	
	.number {
	  text-align: center;
	  background: #212121;
	  color: #fff;
	  font-size: 25px;
	  letter-spacing: 2px;
	  width: 150px;
	  margin: 0 auto;
	  padding: 10px 0;
	  font-family: 'Alfa Slab One';
	}
	
	.label, .number {
	  position: relative;
	  bottom: 15px;
	}
  }
  
  .gauge {
	position: relative;
	width: 400px;
	height: 260px;
	background: linear-gradient(to right, #12bc9b, #fbd35b, #f56464);
	border-radius: 400px 400px 0 0;
	overflow: hidden;
	
	.mask {
	  position: relative;
	  width: 380px;
	  height: 380px;
	  margin: 0 auto;
	  top: 10px;
	  background: #323232;
	  border-radius: 400px;
	  overflow: hidden;
	}
	
	.needle, .spinner {
	  position: absolute;
	  bottom: 50px;
	  left: 50%;
	}
	  
	.needle {
	  height: 0;
	  width: 0;
	  bottom: 70px;
	  margin-left: -10px;
	  border-left: 10px solid transparent;
	  border-right: 10px solid transparent;
	  border-bottom: 200px solid #696969;
	  -webkit-transform-origin: 50% 100%;
	  transform-origin: 50% 100%;
	  @include animation(oscillate ease-in-out 1s alternate infinite);
	}
  
	.spinner {
	  height: 40px;
	  width: 40px;
	  margin-left: -20px;
	  border-radius: 20px;
	  background: #696969;
  
	  &::after {
		position: absolute;
		content: "";
		top: 15px;
		left: 15px;
		height: 10px;
		width: 10px;
		border-radius: 10px;
		background: #323232;
	  }
	}
  }
`;

class Gauge extends HTMLElement {

	constructor() {
		super();
		this._shadowRoot = this.attachShadow({mode: 'open'});
		this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
		this.style.height = "100%";
		//this._shadowRoot.addEventListener("mousedown", this.makeMouseDownHandler(this.mouseStart.bind(this), this.mouseFeedback.bind(this), this.mouseFinish.bind(this), this.mouseAbort.bind(this)));
		this._val = 0;
		this._look = "vu";
		this._rotate_angle = 360; // depends on used picture
		this.needle = this._shadowRoot.querySelector("#needle");

	};



    get val() {
    	return Math.round(this._val);
    }
    set val(value) {
		this._val =  Math.max(0, Math.min(100, value));
		var angle = this._val / 100 * this._rotate_angle;
		//this.needle.style.transform = "rotate(" + angle + "deg)";
	};


	get look() {
		return this._look;
	}

	set look(value) {
		this._look = value;
		this.val = this.val; // Refresh to fit to new scaling
	};



  }
  customElements.define('com-iprosis-sample-gauge', Gauge);
})();