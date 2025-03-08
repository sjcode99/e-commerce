

interface RatingType {
    rate: number,
    count: number,
}
export interface ProductsType {
    category: string
    description: string
    id: number
    image: string
    price: number
    rating: RatingType
    title: string
    quantity?: number
}