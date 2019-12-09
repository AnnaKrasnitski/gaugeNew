(function()  {
let tmpl = document.createElement('template');
tmpl.innerHTML = `
 

  <div style="width: 1200px; margin: 50px auto">
  <div style="margin-bottom: 20px;font-family:'Segoe UI';font-size: 12px; color: #2A2A2A;">
	  <label style="margin-right: 15px;">Enter utilization Percentage:</label><input id="upercentage" type="number" /> <button onclick="render()">Render Chart</button>
  </div>
  <div>
	  <div style="float: left; ">
		  <div style="float: left;margin-right: 100px;">
			  <div id="id4" style="float:left; margin-right: 100px;"></div>
			  <div id="id3" style="float:right"></div>
		  </div>
		  <div id="id2" style="float:right"></div>
	  </div>
	  <div id="id" style="float: left"></div>
  </div>
</div>

  <div id="needle"><div>
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
		this.needle.style.transform = "rotate(" + angle + "deg)";
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