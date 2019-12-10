(function()  {
let tmpl = document.createElement('template');
tmpl.innerHTML = `
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
       <div id="chart_div" style="width: 400px; height: 120px;"></div>

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

		google.charts.load('current', {'packages':['gauge']});
	google.charts.setOnLoadCallback(drawChart);

	function drawChart() {

	  var data = google.visualization.arrayToDataTable([
		['Label', 'Value'],
		['SOMETHING', 80]

	  ]);

	  var options = {
		width: 400, height: 120,
		redFrom: 90, redTo: 100,
		yellowFrom:75, yellowTo: 90,
		greenFrom:0,greenTo:75,
		minorTicks: 5
	  };

	  var chart = new google.visualization.Gauge(document.getElementById('chart_div'));

	  chart.draw(data, options);
	  setInterval(function() {
		data.setValue(2, 1, 60 + Math.round(20 * Math.random()));
		chart.draw(data, options);
	  }, 26000);
	}


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