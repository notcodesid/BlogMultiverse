// BlogCard.tsx
import Link from "next/link";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface BlogCardProps {
    id : number
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
}

export const BlogCard = ({ authorName, title, content, publishedDate, id}: BlogCardProps) => {
    return (
        <Card className="items-start p-5">
            <div className="space-y-2">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-muted-foreground">{content}</p>
                <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Avatar name={authorName} />
                        <div>{authorName || "Anonymous "} </div>
                        <div>•</div>
                        <div>{publishedDate}</div>
                    </div>
                     <Button variant="link" size="sm">
                     <Link href={`/blog/${id}`}>  Read more </Link>
                    </Button>
                    
                </div>
            </div>
        </Card>
    );
}

export function Avatar({ name }: { name: string }) {
    console.log(name)
    const firstLetter = name ? name.charAt(0) : 'A'; //

    
    return (
        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <span className="font-medium text-gray-600 dark:text-gray-300">
            {firstLetter}
            </span>
        </div>
    );
}
