(function()  {
let tmpl = document.createElement('template');
tmpl.innerHTML = `

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