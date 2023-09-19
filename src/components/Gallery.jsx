import Posting from "./Posting"
import { postings } from "../postings.js"

export default function Gallery() {
    return (
        <div>
         {postings.map((posting, index) => <Posting data={posting}/>)}
        </div>
    )
}