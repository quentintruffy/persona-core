import { AbstractJob } from '../types/AbstractJob';

export class PhoneClient extends AbstractJob {
  private isOpen: boolean = false;

  protected onInit(): void {
    try {
      this.registerCommands();
    } catch (error) {
      console.error(error);
    }
  }

  protected registerCommands(): void {
    try {
      RegisterKeyMapping(
        '@phone:open-close',
        'Ouvrir/Fermer le téléphone',
        'keyboard',
        'K'
      );
      RegisterCommand(
        '@phone:open-close',
        async () => {
          if (this.isOpen) {
            this.isOpen = false;
            SetNuiFocus(false, false);
            SendNUIMessage({
              action: 'phone:close',
            });
          } else {
            this.isOpen = true;
            SetNuiFocus(true, true);
            SetNuiFocusKeepInput(true);
            SendNUIMessage({
              action: 'phone:open',
            });
          }
        },
        false
      );
    } catch (error) {
      console.error(`Erreur lors de l'enregistrement des commandes:`, error);
    }
  }
}
