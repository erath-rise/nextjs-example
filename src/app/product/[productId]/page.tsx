export default function ProductDetails({ params }: {params: {productId: string}}) {
    return (
        <div>
        <h1>Product Details</h1>
        <p>This is the product details page { params.productId }</p>
        </div>
    )
}