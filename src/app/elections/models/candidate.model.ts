import { v4 as uuid } from 'uuid';

export class Candidate {
    public readonly id = uuid();
    public readonly photoSrc: string;
    public votes = 0;

    constructor(photoSrc: string)
    constructor(config: Partial<Candidate>)
    constructor(photoSrcOrConfig: any) {
        if (typeof photoSrcOrConfig === 'string') {
            this.photoSrc = photoSrcOrConfig;
        } else {
            Object.assign(this, photoSrcOrConfig);
        }
    }
}
