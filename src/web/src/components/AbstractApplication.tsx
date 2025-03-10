import { JSX } from 'react';

export type AbstractApplicationProps = {
    name: string;
    description: string;
    version: string;
    author: string;
    icon: string;
    exec: typeof AbstractApplication
};

export interface ApplicationProps {
    readonly name: string;
    loadingScreen(): void
    open(): JSX.Element
};

export abstract class AbstractApplication implements ApplicationProps {
    public readonly name: string;

    constructor(name: string) {
        this.name = name;
    }

    public loadingScreen() {
        return this.setLoadingScreen();
    }
    protected abstract setLoadingScreen(): void

    public open(): JSX.Element {
        return this.openApp();
    }

    protected abstract openApp(): JSX.Element
}