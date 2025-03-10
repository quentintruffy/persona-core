
import React, { Component, JSX } from 'react';
import { AbstractApplication, AbstractApplicationProps } from './components/AbstractApplication';


export class AppUber extends AbstractApplication {

  private isLoading: boolean = true


  protected setLoadingScreen() {
    return <div className='h-full w-ful bg-black'><img src={AppUberProps.icon} className='h-full w-full object-cover' /></div>
  }

  protected openApp(): JSX.Element {
    // Utiliser this.state pour déterminer quel écran afficher
    if (this.isLoading) {
      this.isLoading = false;
      const load = this.setLoadingScreen();
    } else {
      return this.mainMenu();
    }
  }

  

  protected mainMenu(): JSX.Element {
    return <div className='h-full w-ful bg-black'>Coucou</div>
  }
}

export const AppUberProps:AbstractApplicationProps = {
  name: 'Uber',
  description: 'AppUber',
  version: '1.0.0',
  author: 'QuentinTruffy',
  icon: 'data:image/png;base64,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',
  exec: AppUber,
};