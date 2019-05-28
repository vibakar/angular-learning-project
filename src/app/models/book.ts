interface Book {
	"id": number,
	"title": string,
	"author": string,
	"isbn": string,
	"publicationDate": string,
	"publisher": string,
	"price": number,
	"genre": string,
	"format": string,
	"checked"?: boolean
}

export default Book;