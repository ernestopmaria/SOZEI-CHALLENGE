import { v4 as uuidV4 } from 'uuid'

class Tool {

    id?: string;
    title: string;
    link: string;
    description: string;
    tags: string | string[]
    created_at: Date

    constructor() {
        if (!this.id) {
            this.id = uuidV4()
        }
    }

}

export { Tool }