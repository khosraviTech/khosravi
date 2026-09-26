import { book } from '@/types/book';
import { BookOpen } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
const books: book[] = [
    {
        title: "Web Performance Engineering in the Age of AI",
        description: "Mastering Speed and Quality for AI-Generated Applications",
        tags: ["AI", "frontend", "performance", "react", "engineering"],
        author: "Addy Osmani",
        image: "/public/books/Web Performance Engineering in the Age of AI.jpg",
        has_epub: false,
        epub_Address: "",
        pdf_address: "/public/books/Web.Performance.Engineering.in.the.Age.of.AI.pdf",
        status: "Reading"
    }
];

export default function CurrentlyReading() {
    return (
        <>
            <div className="border-2 border-[#B7B0A8]  shadow-xl rounded-3xl p-4 grid grid-cols-12 gap-6 bg-bg-card">



                <div className="col-span-12 inline-flex items-center gap-4 ml-2">
                    <BookOpen className="text-accent-green scale-150" />
                    <h1 className="text-primary text-3xl">Currently Reading</h1>
                </div>

                <div className=" col-span-12 flex md:items-start gap-4 p-0 m-0 max-md:flex max-md:flex-col">
                    {books.map((book) => (
                        <div
                            key={book.title}
                            className=" grid grid-cols-12  text-primary bg-bg-card  rounded-3xl p-3 gap-2"
                        >
                            {/* project image */}
                            <Image
                                src={book.image}
                                width={700}
                                height={700}
                                alt="Picture of the project"
                                className=" max-md:w-full h-50 col-span-12 rounded-2xl  pl-5 m-0"
                            />
                            {/* book title */}
                            <h1 className="w-100 max-md:w-full col-span-12 p-2 text-2xl font-semibold">
                                {book.title}
                            </h1>
                            {/* book description */}
                            <h2 className="w-100 max-md:w-full col-span-12 p-2 font-medium">{book.description}</h2>

                            {/* book tags */}
                            <div className="w-full col-span-12 p-2 flex flex-wrap gap-2">
                                {book.tags.map((tag) => (
                                    <div
                                        key={tag}
                                        className="border border-[#48acf0] bg-[#48acf0] rounded-2xl p-2 text-sm font-bold "
                                    >
                                        {tag}
                                    </div>
                                ))}
                            </div>


                        </div>

                    ))}
                </div>
            </div>
        </>
    )
}
