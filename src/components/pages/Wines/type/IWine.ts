export default interface IWine {
    winery: string,
    wine: string,
    rating: {
        average: number,
    }
    image: string,
    location: string;
    id: number,
}