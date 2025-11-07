(async () => {
    
    const id = (new URL(window.location)).hash.match(/product\/detail\/(?<id>[a-f0-9]{32})/)?.groups?.id

    if(!id) {
        alert('No product ID found in URL hash');
        return;
    }

    const body = "{\"ids\":\""+id+"\",\"page\":1,\"limit\":1,\"associations\":{\"media\":{\"sort\":[{\"field\":\"position\",\"order\":\"ASC\",\"naturalSorting\":false}],\"associations\":{\"media\":{\"total-count-mode\":1}},\"total-count-mode\":1},\"prices\":{\"sort\":[{\"field\":\"quantityStart\",\"order\":\"ASC\",\"naturalSorting\":true}],\"total-count-mode\":1},\"tags\":{\"sort\":[{\"field\":\"name\",\"order\":\"ASC\",\"naturalSorting\":false}],\"total-count-mode\":1},\"seoUrls\":{\"filter\":[{\"type\":\"equals\",\"field\":\"isCanonical\",\"value\":true}],\"total-count-mode\":1},\"crossSellings\":{\"sort\":[{\"field\":\"position\",\"order\":\"ASC\",\"naturalSorting\":false}],\"associations\":{\"assignedProducts\":{\"sort\":[{\"field\":\"position\",\"order\":\"ASC\",\"naturalSorting\":false}],\"associations\":{\"product\":{\"associations\":{\"options\":{\"associations\":{\"group\":{\"total-count-mode\":1}},\"total-count-mode\":1}},\"total-count-mode\":1}},\"total-count-mode\":1}},\"total-count-mode\":1},\"cover\":{\"associations\":{\"media\":{\"total-count-mode\":1}},\"total-count-mode\":1},\"categories\":{\"total-count-mode\":1},\"visibilities\":{\"associations\":{\"salesChannel\":{\"total-count-mode\":1}},\"total-count-mode\":1},\"options\":{\"associations\":{\"group\":{\"total-count-mode\":1}},\"total-count-mode\":1},\"configuratorSettings\":{\"associations\":{\"option\":{\"total-count-mode\":1}},\"total-count-mode\":1},\"unit\":{\"total-count-mode\":1},\"productReviews\":{\"total-count-mode\":1},\"mainCategories\":{\"total-count-mode\":1},\"customFieldSets\":{\"total-count-mode\":1},\"featureSet\":{\"total-count-mode\":1},\"cmsPage\":{\"total-count-mode\":1},\"downloads\":{\"associations\":{\"media\":{\"total-count-mode\":1}},\"total-count-mode\":1},\"manufacturer\":{\"associations\":{\"media\":{\"total-count-mode\":1}},\"total-count-mode\":1},\"subscriptionPlans\":{\"total-count-mode\":1},\"warehouses\":{\"total-count-mode\":1},\"warehouseGroups\":{\"associations\":{\"warehouses\":{\"total-count-mode\":1}},\"total-count-mode\":1},\"reviewSummaries\":{\"associations\":{\"translations\":{\"total-count-mode\":1}},\"total-count-mode\":1}},\"includes\":{\"subscriptionPlans\":[\"id\",\"name\"],\"warehouseGroups\":[\"id\",\"name\"],\"warehouse\":[\"id\"]},\"total-count-mode\":0}"

    const defaultPath = 'data[0].attributes';
    const previousPath = localStorage.getItem('BOOKMARKLET-sw-product-data-path') || defaultPath;
    let path = prompt(`object path (blank = ${defaultPath})`, previousPath);

    if(!path) {
        path = defaultPath;
    } else {
        localStorage.setItem('BOOKMARKLET-sw-product-data-path', path);
    }

    const response = await fetch('/api/search/product', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${Shopware.Application.getContainer("service").loginService.getToken()}`,
            'Content-Type': 'application/json',
        },
        body
    });

    const data = await response.json();

    const found = (new Function('data', `return data.${path}`))(data);

    console.log({
        [path]: found,
        data
    });

    return void 0;

})()