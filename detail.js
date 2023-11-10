// api url
const queryString = window.location.search;
const id = queryString.substring(1,8);

const url = './js/data/properties/'+ id +'.json';

html = '';
// Defining async function
async function getProperty(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var property = await response.json();
    
    renderProperty(property);
}

// Calling that async function
getProperty(url);

// Function to define innerHTML for HTML table
function renderProperty(p) {
    let htmlSegment = `
    <table >
    <tr>
    <td id="picture">
    <div class="card-img-top" >
    <img src="${p.primaryURL}" alt="">
    </div>
    </td>
    <td id="desc">
    <div >
      <div style="box-sizing: border-box; flex: 1 1 0%; width: 468px;" class="ds-summary-row-content">
      <div style="box-sizing: border-box; margin-bottom: 8px; font-weight: 600;" class="ds-summary-row">
      <span style="box-sizing: border-box; color: #2a2a33; font-family: 'Open Sans', font-weight: bold; font-size: 36px; line-height: 40px; margin: 0px 16px 0px 0px; display: inline-block;" class="Text-c11n-8-48-0__sc-aiai24-0 hdp__qf5kuj-3 cpRTaJ">
      $${p.price}</span>
  <div style="box-sizing: border-box; display: inline;" class="ds-bed-bath-living-area-header">
  <span style="box-sizing: border-box; display: inline;" class="ds-bed-bath-living-area-container">
  <span style="box-sizing: border-box; font-size: 15px; line-height: 1.5;" class="hdp__qf5kuj-4 jGniAU">
  <span style="box-sizing: border-box;">${p.bds}</span>
  <span style="box-sizing: border-box;" class="hdp__qf5kuj-5 hrNWfo">&nbsp;bd</span></span>
  <span style="box-sizing: border-box; border-style: solid; border-width: 0px 1px 0px 0px; border-color: #d1d1d5; margin-right: 8px; padding-right: 8px;" class="hdp__qf5kuj-6 iDzikP"></span>
  <button style="box-sizing: border-box; color: inherit; font-style: inherit; font-weight: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; margin: 0px; overflow: visible; appearance: button; cursor: help; display: inline; background-image: none; padding: 0px; border-width: 0px 0px 1px; border-bottom-style: dashed; border-bottom-color: #a7a6ab;" aria-describedby="__c11n_cx17" 
  class="TriggerText-c11n-8-48-0__sc-139r5uq-0 gpqori TooltipPopper-c11n-8-48-0__sc-io290n-0 hdp__sc-19crqy3-35 buGkjM" aria-haspopup="false" aria-expanded="false" type="button"><span style="box-sizing: border-box; font-size: 15px; line-height: 1.5;" class="hdp__qf5kuj-4 jGniAU">
  <span style="box-sizing: border-box;">${p.ba}</span><span style="box-sizing: border-box;" class="hdp__qf5kuj-5 hrNWfo">&nbsp;ba</span></span>
  </button>
  <span style="box-sizing: border-box; border-style: solid; border-width: 0px 1px 0px 0px; border-color: #d1d1d5; margin-right: 8px; padding-right: 8px;" class="hdp__qf5kuj-6 iDzikP"></span>
  <span style="box-sizing: border-box; font-size: 15px; line-height: 1.5;" class="hdp__qf5kuj-4 jGniAU">
  <span style="box-sizing: border-box;">${p.sqft}</span><span style="box-sizing: border-box;" class="hdp__qf5kuj-5 hrNWfo">&nbsp;sqft</span></span>
  </span></div>
  </div></div>
  <div style="box-sizing: border-box; flex: 1 1 0%; width: 468px;" class="ds-summary-row-content">
     <p style="margin: 0in; line-height: 18pt; background: white; font-size: 11pt; font-family: Calibri, sans-serif;">
     <b><span style="font-size: 15.0pt; font-family: 'Open Sans', sans-serif; color: #2a2a33;">Overview</span></b></p>
  <p style="margin: 0in; line-height: 18pt; background: white; font-size: 11pt; font-family: Calibri, sans-serif;">
  <span style="font-size: 12.0pt; font-family: 'Open Sans', sans-serif; color: #2a2a33;">Time on Zillow&nbsp; <b>12 days </b></span>
  <span style="font-size: 11.5pt; font-family: 'Open Sans', sans-serif; color: #d1d1d5;">| </span>
  <span style="font-size: 12.0pt; font-family: 'Open Sans', sans-serif; color: #2a2a33;">Views <b>2,741 </b></span>
  <span style="font-size: 11.5pt; font-family: 'Open Sans', sans-serif; color: #d1d1d5;">| </span>
  <span style="font-size: 12.0pt; font-family: 'Open Sans', sans-serif; color: #2a2a33;">Saves <b>109</b></span></p>
  <p style="margin: 0in; line-height: 18pt; background: white; font-size: 11pt; font-family: Calibri, sans-serif;"><b>
  <span style="font-size: 12.0pt; font-family: 'Open Sans', sans-serif; color: #2a2a33;">&nbsp;</span></b></p>
  <p style="line-height: 18pt; background: white; margin: 0in 0in 8pt; font-size: 11pt; font-family: Calibri, sans-serif;">
  <span style="font-size: 12.0pt; font-family: 'Open Sans', sans-serif; color: #2a2a33;">${p.description} </span> </p>
    </div>
    <ul>
    <li > <a>Price and tax history</a></li>
    <li > <a>Monthly cost</a></li>
    <li > <a>Down payment assistance</a></li>
    <li > <a>Rental value</a></li>
    <li > <a>Nearby schools</a></li>
    <li > <a>Similar homes</a></li>
    <li > <a>Neighborhood</a></li>
    <li > <a>Local Legal Protections</a></li>
    </ul> 
   </td>
    </tr>
    </table>
    `;
    html += htmlSegment
      
    // Setting innerHTML as tab variable
    document.querySelector('#propertyDetail').innerHTML = html;
}