# Shopware Admin Product JSON Inspect Bookmarklet

This bookmarklet allows you to inspect the JSON data of a Shopware Admin product detail page.

## Usage

1. Drag the link below to your bookmarks bar:

<a href="javascript:(async()%3D%3E%7Bconst%20o%3Dnew%20URL(window.location).hash.match(%2Fproduct%5C%2Fdetail%5C%2F(%3F%3Cid%3E%5Ba-f0-9%5D%7B32%7D)%2F)%3F.groups%3F.id%3Bif(!o)return%20void%20alert(%22No%20product%20ID%20found%20in%20URL%20hash%22)%3Bconst%20t%3D'%7B%22ids%22%3A%22'%2Bo%2B'%22%2C%22page%22%3A1%2C%22limit%22%3A1%2C%22associations%22%3A%7B%22media%22%3A%7B%22sort%22%3A%5B%7B%22field%22%3A%22position%22%2C%22order%22%3A%22ASC%22%2C%22naturalSorting%22%3Afalse%7D%5D%2C%22associations%22%3A%7B%22media%22%3A%7B%22total-count-mode%22%3A1%7D%7D%2C%22total-count-mode%22%3A1%7D%2C%22prices%22%3A%7B%22sort%22%3A%5B%7B%22field%22%3A%22quantityStart%22%2C%22order%22%3A%22ASC%22%2C%22naturalSorting%22%3Atrue%7D%5D%2C%22total-count-mode%22%3A1%7D%2C%22tags%22%3A%7B%22sort%22%3A%5B%7B%22field%22%3A%22name%22%2C%22order%22%3A%22ASC%22%2C%22naturalSorting%22%3Afalse%7D%5D%2C%22total-count-mode%22%3A1%7D%2C%22seoUrls%22%3A%7B%22filter%22%3A%5B%7B%22type%22%3A%22equals%22%2C%22field%22%3A%22isCanonical%22%2C%22value%22%3Atrue%7D%5D%2C%22total-count-mode%22%3A1%7D%2C%22crossSellings%22%3A%7B%22sort%22%3A%5B%7B%22field%22%3A%22position%22%2C%22order%22%3A%22ASC%22%2C%22naturalSorting%22%3Afalse%7D%5D%2C%22associations%22%3A%7B%22assignedProducts%22%3A%7B%22sort%22%3A%5B%7B%22field%22%3A%22position%22%2C%22order%22%3A%22ASC%22%2C%22naturalSorting%22%3Afalse%7D%5D%2C%22associations%22%3A%7B%22product%22%3A%7B%22associations%22%3A%7B%22options%22%3A%7B%22associations%22%3A%7B%22group%22%3A%7B%22total-count-mode%22%3A1%7D%7D%2C%22total-count-mode%22%3A1%7D%7D%2C%22total-count-mode%22%3A1%7D%7D%2C%22total-count-mode%22%3A1%7D%7D%2C%22total-count-mode%22%3A1%7D%2C%22cover%22%3A%7B%22associations%22%3A%7B%22media%22%3A%7B%22total-count-mode%22%3A1%7D%7D%2C%22total-count-mode%22%3A1%7D%2C%22categories%22%3A%7B%22total-count-mode%22%3A1%7D%2C%22visibilities%22%3A%7B%22associations%22%3A%7B%22salesChannel%22%3A%7B%22total-count-mode%22%3A1%7D%7D%2C%22total-count-mode%22%3A1%7D%2C%22options%22%3A%7B%22associations%22%3A%7B%22group%22%3A%7B%22total-count-mode%22%3A1%7D%7D%2C%22total-count-mode%22%3A1%7D%2C%22configuratorSettings%22%3A%7B%22associations%22%3A%7B%22option%22%3A%7B%22total-count-mode%22%3A1%7D%7D%2C%22total-count-mode%22%3A1%7D%2C%22unit%22%3A%7B%22total-count-mode%22%3A1%7D%2C%22productReviews%22%3A%7B%22total-count-mode%22%3A1%7D%2C%22mainCategories%22%3A%7B%22total-count-mode%22%3A1%7D%2C%22customFieldSets%22%3A%7B%22total-count-mode%22%3A1%7D%2C%22featureSet%22%3A%7B%22total-count-mode%22%3A1%7D%2C%22cmsPage%22%3A%7B%22total-count-mode%22%3A1%7D%2C%22downloads%22%3A%7B%22associations%22%3A%7B%22media%22%3A%7B%22total-count-mode%22%3A1%7D%7D%2C%22total-count-mode%22%3A1%7D%2C%22manufacturer%22%3A%7B%22associations%22%3A%7B%22media%22%3A%7B%22total-count-mode%22%3A1%7D%7D%2C%22total-count-mode%22%3A1%7D%2C%22subscriptionPlans%22%3A%7B%22total-count-mode%22%3A1%7D%2C%22warehouses%22%3A%7B%22total-count-mode%22%3A1%7D%2C%22warehouseGroups%22%3A%7B%22associations%22%3A%7B%22warehouses%22%3A%7B%22total-count-mode%22%3A1%7D%7D%2C%22total-count-mode%22%3A1%7D%2C%22reviewSummaries%22%3A%7B%22associations%22%3A%7B%22translations%22%3A%7B%22total-count-mode%22%3A1%7D%7D%2C%22total-count-mode%22%3A1%7D%7D%2C%22includes%22%3A%7B%22subscriptionPlans%22%3A%5B%22id%22%2C%22name%22%5D%2C%22warehouseGroups%22%3A%5B%22id%22%2C%22name%22%5D%2C%22warehouse%22%3A%5B%22id%22%5D%7D%2C%22total-count-mode%22%3A0%7D'%2Ca%3D%22data%5B0%5D.attributes%22%2Ce%3DlocalStorage.getItem(%22BOOKMARKLET-sw-product-data-path%22)%7C%7Ca%3Blet%20s%3Dprompt(%60object%20path%20(blank%20%3D%20%24%7Ba%7D)%60%2Ce)%3Bs%3FlocalStorage.setItem(%22BOOKMARKLET-sw-product-data-path%22%2Cs)%3As%3Da%3Bconst%20n%3Dawait%20fetch(%22%2Fapi%2Fsearch%2Fproduct%22%2C%7Bmethod%3A%22POST%22%2Cheaders%3A%7BAuthorization%3A%60Bearer%20%24%7BShopware.Application.getContainer(%22service%22).loginService.getToken()%7D%60%2C%22Content-Type%22%3A%22application%2Fjson%22%7D%2Cbody%3At%7D)%2Ci%3Dawait%20n.json()%2Cc%3Dnew%20Function(%22data%22%2C%60return%20data.%24%7Bs%7D%60)(i)%3Bconsole.log(%7B%5Bs%5D%3Ac%2Cdata%3Ai%7D)%7D)()%3B">Bookmarklet</a>

2. Navigate to a Shopware Admin product detail page.
3. Click the bookmarklet to inspect the product JSON data in your browser's console.

## Building

1. git clone this repository
2. npm install
3. npm run build

## Development

paste code from `source.js` into your browser console on a Shopware Admin product detail page and hit enter to test it directly.

## License

MIT
