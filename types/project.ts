export default interface ProjectDb {
    id: number,
    name: string,
    description?: string,
    repoLink: string,
    imageLink?: string,
    link?: string,
    createdDate: Date,
}