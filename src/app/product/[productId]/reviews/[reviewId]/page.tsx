import { notFound } from "next/navigation";


export default function ReviewDetails ({ params } : {
    params : {
        reviewId: string;
        productId: string;
    }}) {
        if (parseInt(params.reviewId) > 1000) {
            notFound();
        } else {
            return (
                <div>
                    <h1>Review Details</h1>
                    <p>This is the review details {params.reviewId} for product {params.productId}</p>
                </div>
            )
        }
}