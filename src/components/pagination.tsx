import {
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
} from 'lucide-react'

import { Button } from './ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger } from './ui/select'

export function Pagination() {
    return (
        <div className="flex text-sm items-center justify-between text-zinc-500">
            <span>Showing 10 of 200 items</span>
            <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                    <span>Rows per page</span>

                    <Select defaultValue="10">
                        <SelectTrigger aria-label="Page" />
                        <SelectContent>
                            <SelectItem value="10">10</SelectItem>
                            <SelectItem value="20">20</SelectItem>
                            <SelectItem value="50">50</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <span>Page 1 of 10 </span>

                <div className="space-x-1.5">
                    <Button size="icon">
                        <ChevronsLeft className="size-4" />
                        <span className="sr-only">First page</span>
                    </Button>
                    <Button size="icon">
                        <ChevronLeft className="size-4" />
                        <span className="sr-only">Previous page</span>
                    </Button>
                    <Button size="icon">
                        <ChevronRight className="size-4" />
                        <span className="sr-only">Next page</span>
                    </Button>
                    <Button size="icon">
                        <ChevronsRight className="size-4" />
                        <span className="sr-only">Last page</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}
