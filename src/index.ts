export interface NPlugOptions {
    root?: string;
    cache?: string;
    npm?: boolean;
}

export default class NPlug {
    public constructor(options: NPlugOptions) {
    }

    public async fetch(...specs: string[]): Promise<void> {
        // Flatten array and then process
    }

    public async install(...specs: string[]): Promise<void> {
        // Flatten array and then process
    }
}