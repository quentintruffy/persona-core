import { JSX } from 'react';
import { AbstractApplication, AbstractApplicationProps } from './components/AbstractApplication';


export class AppTwitter extends AbstractApplication {
  protected setLoadingScreen() {
    return <div>Loading</div>;
  }
  protected openApp(): JSX.Element {
    console.log('open')
    return <div className='h-full w-ful bg-black'><img src={AppTwitterProps.icon} className='h-full w-full object-cover' /></div>
  }
}

export const AppTwitterProps:AbstractApplicationProps = {
  name: 'Twitter',
  description: 'AppTwitter',
  version: '1.0.0',
  author: 'QuentinTruffy',
  icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAVFBMVEVHqej///9Cp+j6/f7W6vnw+P1Mq+k8pedjtOvh8Pvk8vv3+/50u+1QrelVr+qg0PKIxO/K5Pey2fWYzPF8v+7A4fe53fap1PMroOaOyPBquOzP6fmaFgHaAAAFC0lEQVR4nO3c2ZajKhQGYN2A4BCcNZr3f88DSarNoBGiBdZZ++u+qItaiX9gyxCsIEAIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBC6GBAuf0Q3X/4q9Tly7Go+6qq+rwY5WyePxIRTlnd0iQNtTShbd5I/vo7cIq8XJwdgKyiLHyUxl0TPcXhpyEXri/s9QNdx2VO0/AVSSrx77WA86JNupPbjsbHwjYNF+V7lGsc2txei595cWEhs37pjc4dGe3ekmfxbBSNDWeukozVtZpa6bphkpAJmzR8nG+Wu0EW3b2aksxxw/Bev+to/gnykX3K8tjpcsdZQJb6fWlmmobL5T72onVc/ar/J9c3vmRmvw9RZ5qF6nEHwOFIA8O9AGhj9DHCYNrJqOAAXBbNb0eYRP1PNceFQRoQF7MopBRnHjV5adrkOwDZkZ/3TwaD2WJt1jCsF+PQlUmY1u7qBmRLpiuo1ioWRGnWLnFJYx2brL7kjp7ChKQdPzcONIlhL/t5QZej5nMYVThD8GlsOPWm5X9zsZxbbPNYM1dpK/nih3kflIxRi7F4jzBRRV6uIBmipUuAkVplEY4HTajfJ1pltrQKboxHf53lY4/9DbyYqYJULbNm4xSG9a9fo13urr8WZr7nJFUj3xfw5sN/mOQetjgW51pJO4zRy4drEaZbLLzfxIel1QmjVSH4Yx6LMJWXnQw4Ld+h0qSsCsmnQOY14ydMwOtPF0VYXOYZnNVimAeQGd+aPYUJ+Nr9lqQs7mp1RzibD5rewgjTKyTs4+r/CGFWOtpXSO8njC5u46WwqTT3EeU0SgAQ7esMbSNWe8iiVlutGkzOojOuBiNJ4SUMDVPa11lW2a1UVsQOtzGmMLebbZpcLruGcbySuTu9rWd2UbpeylxBvm+x3Djdx5jMrmc2Y17uzGr4N9zVs5KYbCj+RprqF8L4qf9p53xPbrfLntLsPpdRkxlfX5lzsfstwPlXmZNzvncY5xtmEwC7fcpVpPN4MENP0PbEBm+9TKex2qlcFfs9Y2KxU7GOVD4bRqfZcXnGnH6PMYdH+V6DZ3n2nEUf3Mm6ZI/WIY3vhtGH+jhk/c8Bsg0u/k/MyVFIKUXRb+5snibMD6KBXsry/hXxtobxsv3/BD6curKSeh0w76aTGtuUXtbLL3ZqGo/z5Se7NI2fjYw3EO0wo4k9LZff7LBII0eo/huebU1T+Y7wgDfb0nhcYM7gRbxhduZrs2wJNO3XjcNy/2P/MxA5/a5xSOdrr2wZBGrq/E0cP/v+ayBQc2frMSe2OrTukH7MR4xFazElYG/PzhwIqGW0xa3A7mEC13hm801H7H0LY5mqGquDpdT1wxjmVJTapv5JafxQhGPAQUWxWQyQ9pD1op+6lLZ3ZdYfZqyEB0GkkpSWsxlauD9WOi+SQp6iSG8xjVmRt9R2m4m1x7mNRWPedlXVtS2NE/OjZFOz1IfpYlrWsZAo1jl0s1Sj/73LR3AqvjwGQMrmaDN+PW356quZSxYcpfKf8PNoNbCEYVqO/JBRNBWni5lZ4RAWV+J8mHvYHM5F3dG1GxpJGe0GyQ8dRQMeZENfxmyhhQhL4jYvxmOWyhs1LQtENuRdqUcdMqVQMWhZ6T/G8M3T9t7oWU10EmNTDHne95X+n9dD0aiZQgB/8M9kXOdp0XTloP/BX0yCEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhP6//gM5UT0Rlq7HZQAAAABJRU5ErkJggg==',
  exec: AppTwitter,
};