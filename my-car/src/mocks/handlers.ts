import {http, HttpResponse} from "msw"
import homeData from "./data/home.ts"
import carModelSelectionData from "./data/carModelSelection.ts"

export const url = "http://localhost:"
export const port = '5173'
const hHYUNDAI_URL = 'https://www.hyundai.com'

export const handlers = [
    http.get(`${url}${port}/api/home`, () => {

        return HttpResponse.json({ data: homeData })
    }),

    http.get(`${url}${port}/api/carModelSelection`, ({request}) => {
    // Construct a URL instance out of the intercepted request.
        const url = new URL(request.url)

        // Read the "id" URL query parameter using the "URLSearchParams" API.
        // Given "/product?id=1", "productId" will equal "1".
        const carId = url.searchParams.get('carId')
        const trimNameList = url.searchParams.get('trimNameList')!.split('').map(Number)
        const carModelItems = carModelSelectionData[carId].carModelItems.filter(item => {
            return item.trimTypeNumber.every((v, i) => {
                return v === trimNameList[i]
            })
        })
        return HttpResponse.json({ data: {
                carId: carModelSelectionData[carId].carId,
                trimList: carModelSelectionData[carId].trimList,
                carModelItems: carModelItems
            } })
    })


]