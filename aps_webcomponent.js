(function()  {
let tmpl = document.createElement('template');
tmpl.innerHTML = `
<style> 
*{
font-size:14px !important;
font-family: Arial;
}

</style>
<script>
	new com.sap.sample.coloredbox.ColoredBoxPropertyPage();
	 
</script>
<body>
		<legend>Colored Box Properties</legend>					
				<table>
				<tr>
				<td style='font-size:14px'>Color Number:</td>
				<td><input id="colorNum" type="text" name="colorNum" size="20" maxlength="20" >
				<input type="button" value="Apply" onclick="getcolorNumber()"></td>
				</tr>
				</table> 
		<form id="form">
		
	<!-- 		<legend>Colored Box Properties</legend>-->
	
			<div id="formPrint">
			</div>

	</form>

`;

class GaugeAps extends HTMLElement {
		  constructor() {
		    super();
		    this._shadowRoot = this.attachShadow({mode: 'open'});
		    this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
		    this._shadowRoot.getElementById("form").addEventListener("submit", this._submit.bind(this));
		  } //end of constructor

		  _submit(e) {
		    	e.preventDefault();
				this.dispatchEvent(new CustomEvent('propertiesChanged', { detail: { properties: {
					aps_color: this.aps_color,
					colorNum: this.colorNum
				}}}));
				return false;
		  }

		  getcolorNumber()
	 {		
			var num=document.getElementById('colorNum').value;
			var formval = "<table >";
			for(i=1;i<num-1;i++){
			formval +="<tr><td>Color"+i+"</td> <td><input id='aps_color"+i+"' type='text' size='15' maxlength='20' value='green'> </td><td>Value"+i+"</td> <td><input id='aps_value"+i+"' type='text' size='20' maxlength='15' value='"+0.1*i+"' style='font-size:12px'></td></tr>"
			}
			formval +="<tr><td>Color"+i+"</td> <td><input id='aps_color"+i+"' type='text' size='15' maxlength='20' value='green'> </td><td>Value"+i+"</td> <td><input id='aps_value"+i+"' type='text' size='20' maxlength='15' value='"+1+"' style='font-size:12px'></td></tr>"
			formval +="<tr><input type='submit' value='Apply' ></tr>";
			formval +="</table>";
			document.getElementById('formPrint').innerHTML =formval;	
	}

		  get val() {
			 return this._shadowRoot.getElementById("aps_val").value ;
	      }

		  set val(value) {
			  this._shadowRoot.getElementById("aps_val").value = value;
		  }
		  get num() {
			return this._shadowRoot.getElementById("colorNum").value ;
		 }

		 set num(value) {
			 this._shadowRoot.getElementById("colorNum").value = value;
		 }

		  static get observedAttributes() {
			  return ['aps_val','colorNum'];
	      }

		  attributeChangedCallback(name, oldValue, newValue) {
			 if (oldValue != newValue) {
				  this[name] = newValue;
			 }
		  }
}

customElements.define('com-iprosis-sample-gauge-aps', GaugeAps);
})();