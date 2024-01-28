// Last update 17 Jan 2024, Bangalore, India

function getTrendValue() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var get_sheet = ss.getSheetByName("Harvest");
  var put_sheet = ss.getSheetByName("Trend");

  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();
  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;
  const formattedToday = dd + '-' + mm + '-' + yyyy;

  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  let day = weekday[today.getDay()];
  const full_day = day + ' ' + today
  
  //defence
  var bdl_value = get_sheet.getRange('d12').getValue();
  var hal_value = get_sheet.getRange('d45').getValue();
  var cochinship_value = get_sheet.getRange('d23').getValue();
  var mazdock_value = get_sheet.getRange('d68').getValue();
  var bel_value = get_sheet.getRange('d13').getValue();
  //energy
  var nhpc_value = get_sheet.getRange('d74').getValue();
  var sjvn_value = get_sheet.getRange('d89').getValue();
  var tatapower_value = get_sheet.getRange('d96').getValue();
  var ioc_value = get_sheet.getRange('d51').getValue();
  var mtartech_value = get_sheet.getRange('d70').getValue();
  var arem_value = get_sheet.getRange('d6').getValue();
  //bank
  var bse_value = get_sheet.getRange('d17').getValue();
  var pfc_value = get_sheet.getRange('d79').getValue();
  var hdfc_value = get_sheet.getRange('d47').getValue();
  //mobility
  var ircon_value = get_sheet.getRange('d53').getValue();
  //build
  var praj_value = get_sheet.getRange('d83').getValue();

  var total_value = 5*bdl_value + 3*hal_value + 11*cochinship_value + 4*mazdock_value + 42*bel_value + 82*nhpc_value + 87*sjvn_value + 14*tatapower_value 
                    + 55*ioc_value + 1*mtartech_value + 3*arem_value + 1*bse_value + 24*pfc_value + 3*hdfc_value + 41*ircon_value + 8*praj_value
  
  put_sheet.appendRow([
    today,
    bdl_value,
    hal_value,
    cochinship_value,
    mazdock_value,
    bel_value,
    nhpc_value,
    sjvn_value,
    tatapower_value,
    ioc_value,
    mtartech_value,
    arem_value,
    bse_value,
    pfc_value,
    hdfc_value,
    ircon_value,
    praj_value,
    total_value
  ])

  Logger.log(Date())
  Logger.log(hal_value)
  Logger.log(sjvn_value)
  Logger.log(pfc_value)
  Logger.log(ircon_value)
  Logger.log(praj_value)
  Logger.log(total_value)

  debugger;  }
