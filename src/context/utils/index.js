export const normalizePlans = (data) => {
    const features = [
        '$60-120k Account size',
        '30 days Free trail',
        'Hands free software',
    ];
    const productOrder = ['Starter', 'Premium', 'Master'];
    const sortedData = data.sort((a, b) => productOrder.indexOf(a.product.name) - productOrder.indexOf(b.product.name));

    const addFeaturesToProduct = (product) => {
        const { name } = product.product;
        if (name === 'Starter') {
            product.features = ['$60-120k Account size', ...features.slice(1)];
        } else if (name === 'Premium') {
            product.features = ['$120-300k Account size', ...features.slice(1)];
        } else if (name === 'Master') {
            product.features = ['$300-600k Account size', ...features.slice(1)];
        } else {
            product.features = features;
        }
        return product;
    };

    const dataWithFeatures = sortedData.map(addFeaturesToProduct);
    return dataWithFeatures;
}