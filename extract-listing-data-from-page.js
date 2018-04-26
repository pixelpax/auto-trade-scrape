JSON.stringify($("[data-qaid='cntnr-lstng-premium']").toArray().map(listing => {
  ret = {};
  let $listing = $(listing);
  let title = $listing.find('a.text-md').text();
  let wbm = title.match(/1\d\d\"/);
  if (wbm) ret.wb = wbm[0];

  let roofm = title.match(/(\S*)\sroof/i);
  if (roofm) ret.roof = roofm[0];

  let yearm = title.match(/20\d\d/);
  if (yearm) ret.year = yearm[0];

  let link = $listing.find('h2 a').attr('href');
  if (link) ret.link = link;

  let cost = $($listing.find('strong')[1]).text();
  if (cost) ret.cost = cost;

  let miles = $($listing.find('strong')[2]).text();
  if (miles) ret.miles = miles;
  return ret;
}));

function extractFromPage(aray) {
  return $("[data-qaid='cntnr-lstng-premium']").toArray().map(listing => {
    ret = {};
    let $listing = $(listing);
    let title = $listing.find('a.text-md').text();
    let wbm = title.match(/1\d\d\"/);
    if (wbm) ret.wb = wbm[0];

    let roofm = title.match(/(\S*)\sroof/i);
    if (roofm) ret.roof = roofm[0];

    let yearm = title.match(/20\d\d/);
    if (yearm) ret.year = yearm[0];

    let link = $listing.find('h2 a').attr('href');
    if (link) ret.link = link;

    let cost = $($listing.find('strong')[1]).text();
    if (cost) ret.cost = cost;

    let miles = $($listing.find('strong')[2]).text();
    if (miles) ret.miles = miles;
    return ret;
  })
}