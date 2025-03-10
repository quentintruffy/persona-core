import { act } from 'react';
import { AppUber, AppUberProps } from './AppUber';
import { AbstractApplication, AbstractApplicationProps, ApplicationProps } from './components/AbstractApplication';

// const Applications:AbstractApplicationProps[] = [
//   AppUberProps
// ]

export default function PhoneI() {
  return (
    <div className='fixed bottom-4 right-4 bg-transparent'>
      <div className='relative w-[292px] h-[600px] rounded-[45px] border-8 border-neutral-950 ml-1 bg-transparent'>
        <PhoneDynamicIsland />
        <PhoneScreenBorder />
        <PhoneViewScreen>
          <PhoneMainScreen />
          <img
            src='https://w0.peakpx.com/wallpaper/774/289/HD-wallpaper-iphone-x-earth-world-thumbnail.jpg'
            className='absolute top-0 left-0 w-full h-full -z-10 object-cover'
          />
        </PhoneViewScreen>
        <PhoneOutsideButtons />
      </div>
    </div>
  );
}

const PhoneDynamicIsland = () => (
  <div className='absolute top-2 left-1/2 transform -translate-x-1/2 w-[90px] h-[22px] bg-neutral-950 rounded-full z-20'></div>
);

const PhoneScreenBorder = () => (
  <div className='absolute -inset-[1px] border-[3px] border-neutral-600 border-opacity-40 rounded-[37px] pointer-events-none'></div>
);

const PhoneOutsideButtons = () => (
  <>
    <div className='absolute left-[-12px] top-20 w-[6px] h-8 bg-neutral-950 rounded-l-md shadow-md'></div>
    <div className='absolute left-[-12px] top-36 w-[6px] h-12 bg-neutral-950 rounded-l-md shadow-md'></div>
    <div className='absolute left-[-12px] top-52 w-[6px] h-12 bg-neutral-950 rounded-l-md shadow-md'></div>
    <div className='absolute right-[-12px] top-36 w-[6px] h-16 bg-neutral-950 rounded-r-md shadow-md'></div>
  </>
);

export const PhoneViewScreen = ({ children }: { children: React.ReactNode }) => (
  <div className='relative h-full w-full rounded-[37px] overflow-hidden bg-transparent'>
    {children}
  </div>
);

// const PhoneAppleLogo = () => (
//   <svg
//     className='text-black h-20'
//     xmlns='http://www.w3.org/2000/svg'
//     viewBox='0 0 24 24'
//   >
//     <path
//       fill='white'
//       d='M17.05 20.28c-.98.95-2.05.8-3.08.35c-1.09-.46-2.09-.48-3.24 0c-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8c1.18-.24 2.31-.93 3.57-.84c1.51.12 2.65.72 3.4 1.8c-3.12 1.87-2.38 5.98.48 7.13c-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25c.29 2.58-2.34 4.5-3.74 4.25'
//     />
//   </svg>
// );

const PhoneMainScreen = () => (
  <div className='flex flex-col h-full w-full z-10 bg-transparent'>
    <div className='grow pt-10 w-full bg-transparent'>
      <div className='grid grid-cols-4 grid-rows-[repeat(4,auto)] px-4 gap-x-4 gap-y-6 bg-transparent'>
        {Applications.map((application, index) => (
          <PhoneApplication key={index} name={application.name} src={application.icon} />
        ))}
        {/* <PhoneApplication
          name='Instagram'
          src='data:image/jpeg;base64,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'
        />
        <PhoneApplication
          name='Facebook'
          src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAYFBMVEU6VZ////8yT5w0UZ309vqToMfM0uRbcK3c4O1pe7Ta3elida7j5/HQ1Obw8vcsS5p3ir1CXKNKYqartdMlRplugLa0vdi+xd2KmMJ8i7tUaqmAjrufqsyapcnDyt/V2upmnBdfAAAC80lEQVR4nO3cXY+iMACFYbYFUWGofAmiwv//l+NkbzbZqS01bQ/kvPckPOlAkdJJEsYYY4wxxhhjjDHG/ialFPpk7NOzTiglk7qZcn1T7HO0SyhZ3Mfs0Q7zl7ZlmPDHRnSiyK5Llabpn7eVuYh9roaEzJ/z0cDYBkbIoi2tJPiYbnqUlhJ0TFdnR3sKNkb1hzUUaIy8r/gLw8aIOqtWWmAxcmpt72HwGDENqymoGFFfHSygGPVwsWBiunH99YKK6fq192RcjJoWNwsgxvHix8TIy+rJEhfTuMwwoBh1dx4YOIxsZmcLHEY5TjGIGFm7XzFwGHFynC8hMeMHFjCMdJ8w8TCi+OSvDAyTfDDJwGHq1va80+qXzlgYuxmzOg/P++X/+jo24J9kY/Pwn85j03Xql5DGJZGTxQvM6tl0+CsXryxuZuUooAZAmzD/Xq4yuYlheWFuxjvztdmI5fUwY3pkPvZbsSQyM2DStt4Pphpjn6J9RkzZq9jnaJ0Rcz5t47b8kxFzKPaEgXqSfB8xqBGDGjGoEYMaMagRgxoxqBGDGjGobRGj3TWizBj1ZsdJFKh+18jDgFkubzac5HkTnCLy4ajLtAiQltpDf46+BR8bUaz6JH5NY/D3naI4e7JUlx1hjuHfd/rDHMLv0vKHGcIv3vjDtOEXooixKc3CPwJ4w1T3HWHKfkeYpdjRNXOI8L2DN8wc4RsBb5hrsh9M+ghO8Yepsh1hyluEz2q8YSJMM94wEX7N+MMcph1hhvDvZrxh4nxX5wvzDE/xhqnGGC80fWFuMT4S9ISJMs34wnxFWSDwhJmbHWGuUbabeMK0UVZnPtu9qMd0MTBJXZw0Fab/aLLctMfG2vAgdZmXASelOzYO5U1bXKDVRgxqxKBGDGrEoEYMasSgRgxqxKBGDGrEoEYMasSgRgxqxKBGDGrEoEYMasSgRgxqxKBGDGrEoEYMasSgRgxqxKBGDGrEoEYMasSgRgxqxKBGDGrEoEbMmr4BoD1HxMDKq9cAAAAASUVORK5CYII='
        />
        <PhoneApplication
          name='Photos'
          src='data:image/jpeg;base64,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'
        />
        <PhoneApplication
          name='Twitter'
          src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAVFBMVEVHqej///9Cp+j6/f7W6vnw+P1Mq+k8pedjtOvh8Pvk8vv3+/50u+1QrelVr+qg0PKIxO/K5Pey2fWYzPF8v+7A4fe53fap1PMroOaOyPBquOzP6fmaFgHaAAAFC0lEQVR4nO3c2ZajKhQGYN2A4BCcNZr3f88DSarNoBGiBdZZ++u+qItaiX9gyxCsIEAIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBC6GBAuf0Q3X/4q9Tly7Go+6qq+rwY5WyePxIRTlnd0iQNtTShbd5I/vo7cIq8XJwdgKyiLHyUxl0TPcXhpyEXri/s9QNdx2VO0/AVSSrx77WA86JNupPbjsbHwjYNF+V7lGsc2txei595cWEhs37pjc4dGe3ekmfxbBSNDWeukozVtZpa6bphkpAJmzR8nG+Wu0EW3b2aksxxw/Bev+to/gnykX3K8tjpcsdZQJb6fWlmmobL5T72onVc/ar/J9c3vmRmvw9RZ5qF6nEHwOFIA8O9AGhj9DHCYNrJqOAAXBbNb0eYRP1PNceFQRoQF7MopBRnHjV5adrkOwDZkZ/3TwaD2WJt1jCsF+PQlUmY1u7qBmRLpiuo1ioWRGnWLnFJYx2brL7kjp7ChKQdPzcONIlhL/t5QZej5nMYVThD8GlsOPWm5X9zsZxbbPNYM1dpK/nih3kflIxRi7F4jzBRRV6uIBmipUuAkVplEY4HTajfJ1pltrQKboxHf53lY4/9DbyYqYJULbNm4xSG9a9fo13urr8WZr7nJFUj3xfw5sN/mOQetjgW51pJO4zRy4drEaZbLLzfxIel1QmjVSH4Yx6LMJWXnQw4Ld+h0qSsCsmnQOY14ydMwOtPF0VYXOYZnNVimAeQGd+aPYUJ+Nr9lqQs7mp1RzibD5rewgjTKyTs4+r/CGFWOtpXSO8njC5u46WwqTT3EeU0SgAQ7esMbSNWe8iiVlutGkzOojOuBiNJ4SUMDVPa11lW2a1UVsQOtzGmMLebbZpcLruGcbySuTu9rWd2UbpeylxBvm+x3Djdx5jMrmc2Y17uzGr4N9zVs5KYbCj+RprqF8L4qf9p53xPbrfLntLsPpdRkxlfX5lzsfstwPlXmZNzvncY5xtmEwC7fcpVpPN4MENP0PbEBm+9TKex2qlcFfs9Y2KxU7GOVD4bRqfZcXnGnH6PMYdH+V6DZ3n2nEUf3Mm6ZI/WIY3vhtGH+jhk/c8Bsg0u/k/MyVFIKUXRb+5snibMD6KBXsry/hXxtobxsv3/BD6curKSeh0w76aTGtuUXtbLL3ZqGo/z5Se7NI2fjYw3EO0wo4k9LZff7LBII0eo/huebU1T+Y7wgDfb0nhcYM7gRbxhduZrs2wJNO3XjcNy/2P/MxA5/a5xSOdrr2wZBGrq/E0cP/v+ayBQc2frMSe2OrTukH7MR4xFazElYG/PzhwIqGW0xa3A7mEC13hm801H7H0LY5mqGquDpdT1wxjmVJTapv5JafxQhGPAQUWxWQyQ9pD1op+6lLZ3ZdYfZqyEB0GkkpSWsxlauD9WOi+SQp6iSG8xjVmRt9R2m4m1x7mNRWPedlXVtS2NE/OjZFOz1IfpYlrWsZAo1jl0s1Sj/73LR3AqvjwGQMrmaDN+PW356quZSxYcpfKf8PNoNbCEYVqO/JBRNBWni5lZ4RAWV+J8mHvYHM5F3dG1GxpJGe0GyQ8dRQMeZENfxmyhhQhL4jYvxmOWyhs1LQtENuRdqUcdMqVQMWhZ6T/G8M3T9t7oWU10EmNTDHne95X+n9dD0aiZQgB/8M9kXOdp0XTloP/BX0yCEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhP6//gM5UT0Rlq7HZQAAAABJRU5ErkJggg=='
        />
        <PhoneApplication
          name='Snapchat'
          src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAq1BMVEX//////AH//AAAAAD//wEAAAP5+fnt7e38/PzY1wH18gHd3d329vbGxsa8vLzk5OQfHx8pKSk+Pj6kpKSWlQE1NTUuLQNra2vu6wFNTU1TUQH39wEkJCRfX196enp7eQN1cwMqKQM/PgObm5sSEhIKCgMzMgOFgwJNTAOLi4vPz885OAOgnwLHxwJiYQJXV1ccGwONiwITEgOxsbEjIgOurQK/vgLh4AJsawNmcKGWAAAJX0lEQVR4nN2ci3KiShCGgW404AUvqCCJul4iRjFxXcX3f7IzPcR4CcgAY2KdP7VV2c0W+f0Yenq6h1GAqW8bpqb+ujTTsPvkR2F/bA9RU6+/vv1Dyg+y/v+4HyB6dmQqwAegdJSGAZmyYyj9FilOywal7z0QJ5Lm9RUbJX1yWaRUtBUDfxvNtdBQTFkfUBopzVQebESRNKXwB8RIGgsy2vHbggiVYp+JWTCN/W61mQ+Ho9FwY+/2hknGCl22ACluaOMvP3Rdh0+xbz+W/obNWqdJ4gdJsRlhP//4cnMp/e9wb+bHlZMUYrjpckDNVm9Sr1QsyyqXLatSn/TcJvf1ZxNGtH6IFFnijJ4X24ryTVZ9EfkiWz9FCk2ayqE5eKt+dxSpWhlwX7aJP0JKQ2NJmCZWkqNPXpMpg7XMk4NkJoXqho2lxiIR0kmlRYM9jhs18+yalRSaI4bpPWYkxanyzmAdzKwDKyMpdP4yT20xS6Q2xQcnnpUkUhguARo1cU+KUnsGWIbZWGUihQ7D1BEYTeeqdhisWFZSSKHpM08pD913WcyV72VhlYWU1tehU8rqiakDel8T+Q3ZSeFKh6bgY3epShP0VQZU4qYwYAPqLY8nRXljwyoQdyV8+9Absyiez5OiTNgj6F0P9uK3D9kU3MvrSVF6bHoWRiVKCsMZQOYH7yQLYBbird+QgxSuC9w8EruBa1FUgqTQmEGrXMRUuQUzA5N/Qw5SONSzzHhxaoM+FExjxEihM4NGxunlWtUGgIMSSeEqU2qQhAoEI6ggKR8aOePmSW8N8CWSQucPuE9FTT258McRQiVECoMZDIp6UpQBVQ3lkdrpsC1uagv6TiIpNsXkSg8uVeFTjSxS2hCgYEAgVQGGQoFKhJTmrWEqw9QU1p4miZRmjqGVJ+O8UqkFY6EmghApswuuDFMudE15pP7BS+EwxQLVO/yTRopmvp4MUz2Ync9+hUjJNfX/JqXLMqVLJAWyTIE8UuaHHFMv8CFUFhINCe+PFhIeNHi+yjL1KpGUzLlPFimvD00ZWUIDxPqwoqmLpHxKYuqijmSZGqmySKk4l2VqLnHhwHL0QoWESGXRctAtUl+3H21ZC4dTbz9u00gaKUT0qPMa/WWlQ6biebxqX5VP6l+ayf3TeFKIxtxfjuehSh1hjdZ99eKm6rTuo14zOit/yS5vYHwrIpYUmlE7D/TDjnx5G1mL0Q3D7+w3n/1dfR4/P8eTGlNngXc49Y/X8bg7k1B04WWXWXe8/EeWnl2XOhFjYVI0rhtt66nS7nx1hXsynr7e8WqNCXtuyu1nPvKFSKHjH2uupcrixW213F7hOlCkt57bct8Xtc+gZwH4TsxTGEMKwy60ThcqlcsScqmjnsrnUbgF3bgGVwwpzeyDjAiQrhpA34xp2sSOKRaWphIGdpra04SWTezThwf2fLRqEqa7ZFVrLfb0jWLjenyc8niceklrqOeXNXnhGxfUDHFKw6DP41szbjNEUVW2zzx09oOE+S9x7vP2ka3pQLKtymAaWdondksTUxeNZqg19dahJ/EuWj2+P2e9cjC5/XArdWGTnmGTLVeaK8tllma2wbe7Jv7q20kezei7Lpt0JEwypHID9O4Ob0BKJfU55kNfl1FFJw1A98OvfCUnKS50XqEhZbRXGvAqUnYRqrpsQEaOR1kebKRVXfZS0imeUO2l1ad2ICPxpNQTdtJIHWAqJWuoTeEgiRQ6XehIiQnlDnTPtuIUevpWMkOCSHNUIE55r4V2JJyL5b+vXvqu1HRSEkGJokolRaFzKmndwFYOUx4+i5LCuURQHNU8FVUaKTRYvi5pOiaVWV5uYDFS6PmSovlRbYG9cCmkqDLlyvSkKO5XJzknKb67THY6nL7r7CYpNLqSZr1zsRmwy/cH5SKFuCy0uyxJPdDHN/eE3yCFVKl277AirbpUu76xJzyZFCJtXb7LctTia+NkVomkkPZxyQvll2KBXR9qiaXY5EIscZKSBMepfpNVgil02Pp4ejdPzBVj1U9aRMTePg2d8T05cVdU8XSu30ZKvn1IJWpo3mk8HfXWBCphi9WnEJ0hebpbGegoi1wNnZha+jUpKmtQUWMhoemYptKCih1U6rhFikoaKxpNzbsOp5PqBGu8ihouMaSoluEFc16T+glMkTgslvcF5nnVQzky8pz9yNdll6PSFRWsdH+0d7zjsxiR0jx7FrVLOos71BNvq7KIGhv6zP7sMEekeAwAeH6vScx8xVWuvURV0B2ekaKN3YtJ7ceG0neVau3F1+bwT1LDO8dvEbEYP7wgtWe3b/KLoBiqCbt9+3NSGq3uoLX9lRFFKm+p/zDHiziF1OMDaCzqv+CrXOeldd0+hvaviI5GVDR/dhdvVlViM+2WnqpWbeE+R6X103sZp7kPMdj8/Xxb1h1M2vefkNuTgXt8G3djnM2AyuXMF8z9f8fXeKWvrS61Pb4e/Mef82J/UpbAfKnG3l5Hrzvf9R6Wolep1/beUK+L/d/yKf5+umoaB8k1hGu1AQ6Gqca8C5+0cGDODKkVoO8aUPUloR2SvMTSwb1jeCi7oGdeYqnoSy9tnKsC0E9cjSaTWp3vbymVSsXfBimdhb86FT+zkwqiQfX0tl0MBr2Xl95g0M7b667W2sdrLNo8Perdqgclm3LGLJ15mV4dOtDZZn+Rddu5ugi0enzvRubbp/J1exRMTiJbk0w38mnSibkILa6S3i6/XXVhk+FsfJjvAsdkearnGLvNml8xQ+pV5wbWm53heCzrNukio/7r39dcVRfmSg0Nwzke/BHJC0f0SXuCY6vaI0ij0Lu4CJphGGq56lPRqusqvFEPnrZ3iNU+6nQ4weF7X11LOTkk+yEOqAYEa5AKqzogTIGa+OTnIpUI0BwKFEDoTXt9aOY5RyrXwSCo7ijBWdx4DKtsbaL/26m3th/IJMVhOWteckiytaUiwdrJedxW3sNmGCyKDu+1GFtPtXdeTlFTGguSSXFYIY0saLWvpu0KLUzYaArzn0pW6FiewOdLIHdAp82Uy1alsh24DbLkB79yLA+HhftDzME8+nqftpvlbqQ4LTW0/e7seIKRrs+6vh1ehqafJfVJC8NgtaKjnobz1SoIU/f83J0UfWnHQ7GO3+S90InUQx4f9pAHrT3kkXQPeXif/3jHHPqPeSDkYx6d+ZiHjD7Ucaw++fkPxKjG/1ETJnwAAAAASUVORK5CYII='
        />
        <PhoneApplication
          name='Gmail'
          src='data:image/png;base64,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'
        />
        <PhoneApplication
          name='Whatsapp'
          src='data:image/png;base64,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'
        />
        <PhoneApplication name='Duux' />

        <PhoneWidget />
        <PhoneApplication
          name='YouTube'
          src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAbFBMVEX/AAD/////6en/VFT/LS3/+vr/2Nj/9/f/v7//ExP/qKj/8PD/7e3/ICD/lpb/oqL/dHT/YWH/nJz/trb/ysr/4+P/i4v/aWn/f3//09P/Jyf/srL/UFD/Ghr/Cwv/NTX/QUH/W1v/SUn/hYWjH7CLAAADxElEQVR4nO2c65KiMBBGAyJykXC/iAio7/+OG1fdUVd3amJD3K7v/HSwxlOQdKdJWggAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8Jvej73vf93S6K2rZ1HlAfRdFupy5Ql6mLPwo/cobxsE/ruk6SpqkqKbM4DoI8zz3PK4qNe8emKNTH6o9BEMeZlFXVNEmivpzuD+PgRL4Jh37o0qSSWbBVP9gtw9WZ5R+sb/i68vLVsHSV6DbIZJWk3TDXPRsbZaAEvv3BuixPYt62GScW6VvpriezeHBal3LKOzTIcB6RK+FkOlHizqtyokyiKVycuW/LmTBz6F2i2IiLsolbchm5MuNiWauM2mVvzEXZ7IllSnMulmXTulQmXSxLksqszcqsKV3kTFH/FUvKW+OZdbEsj85lNBD673FHMpnE8JBRgyYhkzE9ZEgHTWBeJqByGYyPfzUDDEQynfHxr2aAjkimtk2rqIymJpIxP5kRTmeNoZXMLWFD49KbWWI+yEiaYkAUGFzLXFkFNLUAJzceZlSgyWlKAVphZlkS306iQDNuNP633Uja6LQZSWQOOr/K7vx9QDmluwcSGa0EwF4I0daEeRBRCrDXKWacZE5FULJCiLsgkUn1ZRQZ0URQpiQy9VsyovVIYm5Jk5wlOnmmffNU1AXB3bFpkrNGZ1K6lRFOtXlbZ02SnPXHt2VUrMrejTrrI0Vy1lc6z7z9OPl0b0adsCKR0ar//yWjxp73zrO2Ikmbfa3J9YmMcJqNfsq6ykhkYioZlRlJ7SC6iik2CfhahabnMsLfbzWjzjKgkNltdf73CxmlUxd6NtsdhUxOKiM08yMrp5CJtFLff8kIofOy16NYN08hoxK2H0edz5U5RZ0f7lv5ZBnhHH82dCAzkwyjx4zTBGBsamYVNFmlM9SJpuaihibR5LUE4LQ4Y7Vs5lXQ4FRqYlUE5FWeZVU4Z/VKY6H75uwTXzaxeg3I6gUtq1fnrDY1sNpuwmojEKstWqw2z/Ha1shqwymrrcCsNmmz2j7P62CD+emM8MgJq8NArI5piYrTATpWRxtNHzqtSGXMHgcuaV3EgtNBbWFuUUN/hF5EmbHmBhM0njDVdkJO0HbiVJ7UqTm9iTtNQxBhplXLRCpi7iY6rmynbnPEpr3RlZvGU97TxlPfmC6fNp7y5m88dce5JViX/u4J1jTHa0uw4NISrLhvCVZcWoIF15Zgx3NLsDTtzLUEe81Xs7Zn3douvdo+tFkbAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIDX/AI1U2TEwcxKZQAAAABJRU5ErkJggg=='
        />
        <PhoneApplication name='Duux' />

        <PhoneWidgetLarge /> */}
      </div>
    </div>
    {/* <PhoneNavigationButtons /> */}
  </div>
);

const PhoneNavigationButtons = () => (
  <div className='p-2 w-full h-fit z-10'>
    <div className='flex flex-row p-2 items-center justify-between bg-neutral-200/40 w-full h-full rounded-3xl'>
      {/* <div className='flex flex-row items-center justify-between bg-neutral-200/40'> */}
      <PhoneApplication />
      <PhoneApplication />
      <PhoneApplication />
      <PhoneApplication />
    </div>
  </div>
);

const PhoneApplication = ({ name, src, app }: { name?: string; src?: string, app?: AbstractApplication }) => (
  <button onClick={() =>app?.open()} className='relative flex flex-col items-center cursor-pointer h-fit w-fit col-span-1 row-span-1'>
    <div className='bg-neutral-300 h-12 w-12 rounded-xl overflow-hidden'>
      {src ? <img src={src} className='h-full w-full object-cover' /> : null}
    </div>
    {name ? (
      <div className='absolute text-[10px] text-white shadow-2xl font-semibold -bottom-4 [text-shadow:1px_1px_2px_rgb(0_0_0_/_90%),_0_0_1em_rgb(0_0_0_/_90%),_0_0_0.1em_rgb(0_0_0_/_90%)] whitespace-nowrap'>
        {name}
      </div>
    ) : null}
  </button>
);

// const PhoneWidget = () => (
//   <div className='relative flex flex-col items-center cursor-pointer bg-neutral-300 h-[112px] w-[112px] col-span-2 row-span-1 rounded-xl'></div>
// );

// const PhoneWidgetLarge = () => (
//   <div className='relative flex flex-col items-center cursor-pointer bg-neutral-300 h-[112px] w-[240px] rounded-xl'></div>
// );

import React, { Component } from 'react';
import { AppTwitter, AppTwitterProps } from './AppTwitter';

interface PhoneState {
  activeApplication: AbstractApplication | null;
}

export class Phone extends Component<{}, PhoneState> {
  public applications: AbstractApplicationProps[] = [AppUberProps, AppTwitterProps];
  public activeApplication: AbstractApplication | null = null;

  constructor(props: {}) {
    super(props);
    this.state = {
      activeApplication: null
    };
  }


  public screenView() {
    console.log("État actuel:", this.state.activeApplication);
    if (this.state.activeApplication != null) {
      // return this.activeApplication.open();
      return (
        <PhoneViewScreen>
          {this.state.activeApplication.open()}
        </PhoneViewScreen>
      )
    }
    return (
      <PhoneViewScreen>
        <img
          src='https://w0.peakpx.com/wallpaper/774/289/HD-wallpaper-iphone-x-earth-world-thumbnail.jpg'
          className='absolute top-0 left-0 w-full h-full object-cover'
        />
        {this.mainScreen()}
      </PhoneViewScreen>
    )
  }

  public mainScreen() {
      return <div className='flex flex-col h-full w-full z-10 bg-transparent'>
      <div className='grow pt-10 w-full bg-transparent'>
        <div className='grid grid-cols-4 grid-rows-[repeat(4,auto)] px-4 gap-x-4 gap-y-6 bg-transparent'>
          {this.applications.map((application, index) => {
            const AppClass = application.exec;
            // TypeScript ne sait pas que AppClass est une classe concrète, 
            // nous devons donc utiliser un casting
            const appInstance = new (AppClass as new (name: string) => AbstractApplication)(application.name);
            
            return this.MyApplication({
              name: application.name,
              src: application.icon,
              app: appInstance
            })
          })}
        </div>
      </div>
      <PhoneNavigationButtons />
      {/* <div className='bg-red-300'>e</div> */}
    </div>
  }

   // Ajouter cette méthode pour déboguer
   componentDidUpdate(prevProps: {}, prevState: PhoneState) {
    if (prevState.activeApplication !== this.state.activeApplication) {
      console.log("État mis à jour avec succès:", this.state.activeApplication);
    }
  }

  public MyApplication({ name, src, app }: { name?: string; src?: string, app: AbstractApplication }) {
    return (
      <button onClick={() =>this.openApplication(app)} className='relative flex flex-col items-center cursor-pointer h-fit w-fit col-span-1 row-span-1'>
        <div className='bg-neutral-300 h-12 w-12 rounded-xl overflow-hidden'>
          {src ? <img src={src} className='h-full w-full object-cover' /> : null}
        </div>
        {name ? (
          <div className='absolute text-[10px] text-white shadow-2xl font-semibold -bottom-4 [text-shadow:1px_1px_2px_rgb(0_0_0_/_90%),_0_0_1em_rgb(0_0_0_/_90%),_0_0_0.1em_rgb(0_0_0_/_90%)] whitespace-nowrap'>
            {name}
          </div>
        ) : null}
      </button>
    )
  }

  public openApplication(app: AbstractApplication) {
    // this.activeApplication = app
    this.setState({ activeApplication: app });
    return app.open();
  }

  render () {
    console.log("Render appelé, état actuel:", this.state.activeApplication);

    return (<div className='fixed bottom-4 right-4 bg-transparent'>
      <div className='relative w-[292px] h-[600px] rounded-[46px] border-8 border-neutral-950 ml-1 bg-black'>
        <PhoneDynamicIsland />
        <PhoneScreenBorder />
        {this.screenView()}
        <PhoneOutsideButtons />
      </div>
    </div>)
  }


}