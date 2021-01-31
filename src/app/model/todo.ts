export class Todo {
    constructor(
        public id: number,
        public title: string,
        public description: string,
        public project: string,
        public tag: string,
        public date: string,
        public color: string
    ) { }
}
