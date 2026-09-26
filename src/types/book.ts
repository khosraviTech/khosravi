export type book = {
    title: string,
    description: string,
    tags: string[],
    author: string,
    image: string,
    has_epub:boolean,
    epub_Address: string,
    pdf_address:string,
    status:"Reading"|"Completed"|"Want to Read"
    
}