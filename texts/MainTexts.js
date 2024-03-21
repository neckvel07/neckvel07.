const body = document.querySelector('body');
const mediaQuery = window.matchMedia("(min-width: 601px) and (max-width: 1200px)");
const h3 = document.querySelector('h3');
const addPhotos = document.querySelector('.center');
const addBigPhoto = document.querySelector('.bigPhotoAdd');
const centerElements = document.querySelector('.centerElements');
const darker = document.querySelector('.darker');
const content = [
    {
        title: 'Pixar',
        date: '25/09/2023',
        src: '../assets/photos/pixar.jpg',
        text: 'Nico, eu já disse que sempre tive uma quedinha por ti, né? Quando tu me chamou do nada no insta pra começar a falar comigo eu não achava que ia dar em algo. Pra mim era impossivel TU querer sair cmg e ter algo comigo (E quando tu me chamou pra sair, que eu tava no meio da aula, fiquei TODO derretido de amor e até falei pra minha amiga todo felizinho!) Na noite anterior, quando caiu a ficha de que eu ia sair com o nick loiro do insta eu comecei a ficar nervoso por achar que tu fosse se decepcionar comigo pessoalmente, e pra piorar eu fui tapado e me atrasei. Mas quando cheguei e te vi, meu coração se preencheu inteiro e eu só queria ficar pertinho de ti até a hora de ir embora. Quando a gente entrou, ficamos um do ladinho do outro bem pertinho, e tu escreveu "tu é mt mais bonito pessoalmente" sorrindo pra mim, meu coração derreteu TODINHO! Eu tava tão feliz naquela hora, e a cada sala que a gente passava eu criava mais coragem pra tentar segurar na tua mão (Internamente eu tava todo tímido e envergonhado, mas por fora tava tentando ser o mais extrovertido e confiante do mundo!). Tava até criando um plano na minha mente, de olhar uma proxima sala antes de ti enquanto tu escaneava o QR e te puxar fingindo que vi algo mega wow (Funcionou MUITO) e tu continuou segurando na minha mao 🥺 Foi um dia tão especial pra mim, e eu fiquei tão bobo quando tu só jogou a outra bolinha na minha sacola (Eu tava meio desligado naquela hora e ai eu fiquei :0 ♡u♡). Eu nunca tinha me sentido daquela forma antes, nico! Quando a gente tava se beijando no estacionamento e tu tinha teus mini surtinhos de felicidade e dizia que nao tava acreditando que tava ali eu pensei "Caraca eu devo estar sonhando mesmo". E se eu ainda tô, não quero acordar nunquinha 🥺💖 Foi um dos dias mais especiais da minha vida, e depois daquilo, não teve mais volta! A partir daquele dia eu comecei a pensar em ti o tempo todo. Nico, tu fez eu me apaixonar perdidamente por ti no primeiro encontro.'
    },
    {
        title: 'Wonka',
        date: '08/12/2023',
        src: '../assets/photos/lego.jpg',
        text: 'Nesse dia eu confesso que eu tava nervoso e tímido também. Mas mesmo assim, quando cheguei e a gente começou a conversar eu me senti tão mais aliviado. Naquele dia eu comecei a ter certeza de que eu tava gostando de ti, e não era pouquinho. Foi tão divertido ver o filme do wonka contigo. Naquele dia, foi a primeira vez que deitamos um no ombro do outro, primeira vez que eu fiz carinho em ti e que tu fez em mim também. Foi tão especial pra mim que eu sentia que ia começar a flutuar, porque o filme era todo mágico e fofinho e eu tava vivendo um momento que nunca na minha eu imaginaria em viver, com o garoto que tava conquistando o meu coração. Eu sou meio resistente pra entregar meu coração, sabia? Mas contigo eu só sentia vontade de me entregar por completo de uma vez por todas, por todas as tuas qualidades,  por todos os teus aspectos, pelo garoto incrível que eu tava conhecendo. Ah, e também não podemos nos esquecer da minha mochila perdida por alguns minutos hehe ;P E também os milkshakes que a gente dividiu! Foi tão legal (E bem doce, só não tanto quanto o meu namorado 💖) 🤍🤎 (milkshake). Passamos pela cobasi pra ver os bichinhos fofos e os esquisitos, e eu te ouvi falar sobre os teus peixinhos (Até os que já se foram 💔). Conheci naquele dia um pouco mais do garoto dos meus sonhos.'
    },
    {
        title: 'Glasses',
        date: '08/12/2023',
        src: '../assets/photos/glasses.jpg',
        text: 'Esse dia eu tava muito animado! Tinha ido pro colégio cedinho e saltitante pra fazer uma reavaliação e aumentar minha nota. Acho que nunca fui tão feliz pro colégio antes, e lembro que logo que acabei minha prova fui correndo pro banheiro do colégio, me arrumei lá e fui te ver! Tava até pensando nisso esses dias no colégio, sabia? Foi um dia MUITO legal. 💙 A gente montou nossos leguinhos (Um montou o do outro, lembra? Meu nico natalino hehe🎄❤️ (Aliás, sempre vou lembrar da gente no natal! Tu foi o melhor e mais importante presente que o papai noel já me deu. Sempre pensei assim, desde aquela época). O filme foi TÃO divertido e até levamos xixi da segurança, mas o importante é que passei mais da metade do filme agarradinho no meu príncipe e não deixei de te fazer carinho, mesmo estando com um braço de cinema entre a gente. Nada ia me impedir de cuidar de ti, e nunca vai! Ah e também tomamos açaí juntinhos, lembra? Foi nesse dia que eu ouvi "Eu te amo" do garoto que mais amei e que mais amo na vida pela primeira vez. Voltei tão sorridente pra casa depois, que vou chegar aos 25 com o rosto marcado de tanto sorrir. Mas pelo menos posso me exibir que foi meu namorado que fez eu ser tão feliz a ponto de levar isso nas marcas do meu rosto hehe >3<~~♡ Depois desse dia eu tinha certeza que eu te amo demais. Decidi que não vou deixar ninguém te tirar de mim, e que eu vou ser o melhor namorado do mundo (Porque eu já tava sonhando em te namorar hehe). Antes a gente se segurava tanto, mas agora eu posso dizer infinitamente que Eu te amo infinitamente!'
    },
    {
        title: '"Work Day"',
        date: '22/12/2023',
        src: '../assets/photos/Wday.jpeg',
        text: 'Nesse dia, tu foi me buscar lá na estação em Porto Alegre. Tu tava tão fofo e tão lindo naquele dia 💗 Consigo me lembrar de ti esperando do meu lado o trem chegar, e da gente ouvindo músicas juntos. Ah, e eu lembro de quando tu pesquisou loona no spotify e colocou Heart Attack pa gente ouvir. Foi TÃO fofo, meu coração derreteu todinho 🥺. Eu tava muito animado naquele dia e foi a primeira vez que ficamos juntos num lugar sozinhos. Quando a gente foi almoçar eu tava morrendo de timidez, mas fui perdendo enquanto a gente caminhava pela unisinos. Lá que eu acabei dando oi pro pessoal do senac KSKS. Quando a gente chegou no escritório e ficamos juntos, eu me senti tão bem! Foi tão divertido jogar contigo pela primeira vez e ver tu me ensinando sobre o Call of Duty. Sempre me xingam quando jogo CoD mas tu me deixou muito confortável e eu me senti muito bem jogando contigo. Aí a gente foi ver filme e pela primeira vez a gente foi um pouco além dos beijos. Aquele dia eu me senti como eu nunca tinha me sentido antes. Eu senti tanto prazer e só de pensar que eu tava fazendo aquilo contigo me deixava ainda mais feliz. Te vi de cuequinha pela primeira vez hehe! Foi muito especial pra mim e nunca vou esquecer desse dia 💖'
    },
    {
        title: 'Nico`s house sleepover',
        date: '12/01/2024',
        src: '../assets/photos/nHS.jpg',
        text: 'Esse foi com certeza o nosso melhor date de todos! O meu favorito. Foi a segunda vez que andei de trem e aqui eu já tava mais profissional (Mesmo estando sozinho! Mas tinha meu nico pra me guiar se precisasse, e pelo meu amorzinho eu vou até São Leo a pé se precisar 😼) Quando cheguei e te vi com a lambretta fiquei tão feliz (E confesso que fiquei com muito medo de deixar a gente cair por me desequilibrar KSKSKSK). Mas deu tudo certo e chegamos na tua casa. Eu tava bem tímido mas tava me sentindo muito feliz, ainda mais depois que tu me deu o buquê de flores de papel que eu guardo até hoje com o maior carinho do mundo 🥺💖 Foi tão fofo! A gente assistiu filminho juntos, jogamos juntos, e pela primeira vez nós fomos além juntos. Eu nunca tinha ficado daquele jeito antes e naquele dia a gente deu um passo muito grande na nossa relação, pelo menos na minha visão. Eu me senti muito confortável contigo e me senti muito bem também. A gente cruzou uma linha que tava pouco a pouco sendo ultrapassada e então finalmente tu preencheu todo o meu coração. Eu nunca tinha nem encostado direito num VR antes e sempre quis jogar beat saber pq AMO jogos de ritmo! A minha primeira vez não podia ser mais divertida e minha companhia não poderia ser melhor 😸💖 Além disso eu dirigi pela primeira vez num simulador e foi MTT divertido, mas ao mesmo tempo desafiador (Mas não se preocupa que teu nokinho aqui já tá profissa😎). Ah, e não tem como esquecer 🥺 Eu te ouvi tocar pianos pela primeira vez. Foi tão mágico, meu amor, eu tava vendo o garoto que faz meu coração estremecer e aquecer, o garoto mais lindo que eu já vi, tocando piano pra mim, e músicas que eu gostava e conhecia. Eu me arrepiei naquela hora e sentia que ia flutuar, e achava muito fofo quando tu dizia que nunca tinha ficado tão nervoso pra tocar piano hehe. Tu me conquistou ainda mais naquele momento, nico. Falando em conquistar, tu não gostar de pizza de queijo não me faz te amar menos, viu? Quando a gente deitava juntinhos no escuro, meu corpo inteiro relaxa e a minha mente esvaziava. Tu preenchia meu corpo todo e todos os meus pensamentos, e assim tu me deixava totalmente alegre. Eu sorria pro nada só de perceber onde eu tava e com quem eu tava. Eu tava torcendo muito pra não fazer nenhuma bobagem dormindo (Porque eu me mexo MUITO) e acabei virando um TRATOR SEM QUERER. MAS que bom que tu não terminou comigo por isso, hehe >3<~~♡♡♡ Aquela madrugada também foi muito especial, e ver bolt contigo foi sensacional. Sempre lembro de ti quando vejo qualquer coisa relacionada ao filme. Quando eu acordei no outro dia as 15h da tarde eu pensei "meu deus não acredito que acordei tão tarde, ele deve estar irritado comigo". Mas aí tu apareceu com panquequinhas feitas pra mim 🥺 Eu fiquei TÃO feliz naquele momento, me senti tão especial. Tu é a única pessoa que faz eu me sentir assim, nico. Totalmente preenchido e feliz, totalmente amado. Foram as melhores panquecas que eu já comi💖 Meu nico chefe cozinheiro hehe. A gente jogou gang beasts e cod e mesmo tendo sido humilhado, foi muito divertido. Mas infelizmente chegou ao fim e tive que ir pra casa 💔 E tu me deu balinhas e chocolatinhos pra levar pra casa! Foi tão fofo e eu tentava comer o menos possível pra poder guardar por mais tempo (Alias, nao joguei fora a caixinha de nerds, sabia?). Ah e na segunda vez que andei de lambretta já tava profissional bb😎 Na próxima vou nem tremer na base! Voltei todo sorridente naquele dia, ouvindo música e pensando em ti. Tava totalmente apaixonado e tinha vivido um dos melhores dias da minha vida todinha 🩵💙 Sempre penso nesses dias, sabia? Foi incrível, nunca vou me esquecer. Tu me faz muito bem e mesmo tendo um texto enorme pra falar sobre esse dia, ainda não é o suficiente pra expressar o quão significativo foi pra mim 🥺💖'
    },
    {
        title: 'Shopping de Cabelo Lindo',
        date: '17/01/2024',
        src: '../assets/photos/nokosHair.jpeg',
        text: 'Nesse dia, tu foi me buscar lá na estação em Porto Alegre. Tu tava tão fofo e tão lindo naquele dia 💗 Consigo me lembrar de ti esperando do meu lado o trem chegar, e da gente ouvindo músicas juntos. Ah, e eu lembro de quando tu pesquisou loona no spotify e colocou Heart Attack pa gente ouvir. Foi TÃO fofo, meu coração derreteu todinho 🥺. Eu tava muito animado naquele dia e foi a primeira vez que ficamos juntos num lugar sozinhos. Quando a gente foi almoçar eu tava morrendo de timidez, mas fui perdendo enquanto a gente caminhava pela unisinos. Lá que eu acabei dando oi pro pessoal do senac KSKS. Quando a gente chegou no escritório e ficamos juntos, eu me senti tão bem! Foi tão divertido jogar contigo pela primeira vez e ver tu me ensinando sobre o Call of Duty. Sempre me xingam quando jogo CoD mas tu me deixou muito confortável e eu me senti muito bem jogando contigo. Aí a gente foi ver filme e pela primeira vez a gente foi um pouco além dos beijos. Aquele dia eu me senti como eu nunca tinha me sentido antes. Eu senti tanto prazer e só de pensar que eu tava fazendo aquilo contigo me deixava ainda mais feliz. Te vi de cuequinha pela primeira vez hehe! Foi muito especial pra mim e nunca vou esquecer desse dia 💖'
    },
    {
        title: 'Patinação',
        date: '02/02/2024',
        src: '../assets/photos/patinacao.gif',
        text: 'ESSE DIA FOI TÃOO LEGAL!! Nunca tinha patinado no gelo antes e a primeira vez foi com o garoto mais especial da minha vida todinha! Nunca tinha naquele shopping antes, e ele é muito bom. Fiquei te esperando na frente do fliperama e fiquei tão feliz quanto te vi 😸 Já tava mais confiante em relação ao cabelo, mesmo que ainda não totalmente. Eu tive que aprender a patinar na marra, mas foi muito divertido patinar contigo (Ainda mais que tu é profissional nisso. Vou conseguir dar saltos lindos algum dia viu! Podemos patinar de novo algum dia ♡) Depois fomos pro parque, e foi TÃO gostosinho. Aquele parque é perfeito pra gente ficar juntinhos, podemos ir mais vezes também (Talvez um piquenique com as telas pra pintarmos juntos? Qualquer coisa contigo!) Foi um dia MUITO especial e MUUUIITO gostosinho. Eu te amo demais, nico 💖💖💖 Ah e a gente também mediu os nossos dedos nesse dia hehe 😸 Me senti muito feliz'
    },
    {
        title: 'Valentine`s Day',
        date: '14/02/2024',
        src: '../assets/photos/nHS.jpg',
        text: 'Acho que esse é o meu segundo favorito! Foi um dia INCRÍVEL. Nunca tinha feito nada no dia dos namorados antes, sabia? Tu foi o primeiro de todos, hehe. Eu tinha encomendado tuas flores e tinha me atrasado um pouquinho porque tinha ido buscar elas (E por isso demorei um tempão pra mandar minha loc!) Eu queria que fosse mais surpresa do que foi, porque não sabia onde tu tava e tu me viu com as flores logo que eu desci do carro hehe😸 Mas foi INCRÍVEL! Assistir filme contigo no parque, conversar, fazer carinho em ti e o clima gostosinho. Me senti tão amado e tão feliz naquele dia. Ah e tu tava TÃO lindo! Ver teus olhos e teu cabelo no sol foi sensacional, tu fica perfeito 🥺 Depois fomos passear pelo shopping e tomar açaí juntinhos, que foii o melhor açaí de todos com minha pessoa favorita do mundo. Aliás, fiquei felizinho com as atendentes falando do buquê (Sinal pra ti ficar cmg hein 😏). Me senti muito à vontade contigo naquele dia e muito feliz tbm! Minha autoestima tava bem mais alta do que nos outros dias e tu tava TÃO lindo. Melhor dia dos namorados que eu poderia ter (E ainda ganhei uns pontos com a sogrinha heinn). Fui pra casa todo sorridente e quando cheguei fiquei ainda mais. Recebi o buquê mais lindo do mundo 🥺 Não me aguentei naquele dia e chorei de felicidade, o meu coração tava querendo sair do meu peito de tanta felicidade e eu tive ainda mais certeza de que É TUU, nico. Todo mundo falando pra mim, que é TU! E eu tive certeza disso nesse dia, sabia? Tem que ser tu, porque tu é o único que faz eu me sentir da forma que eu me sinto. O único que eu quero dar o meu máximo e presentear com todas as coisas do mundo. Tu é tudo pra mim 💖 Só de lembrar meu peito já quer explodir de amor!!!'
    },
    {
        title: 'Affogato & Cinema',
        date: '17/02/2024',
        src: '../assets/photos/affogato.jpeg',
        text: 'Eu SEMPRE quis ir pra um cat café, sabia? E fui pela primeira vez contigo (Já deu pra perceber que tive muitas primeiras vezes contigo, né? Hehe, da melhor forma possível!) No café foi TÃO lindo! Tu tava muito gato e o lugar era MUITO fofo. As comidinhas eram perfeitas e o ambiente mtmtmt fofinho (Mas eu confesso que eu tava meio timidozinho 👉👈). Quando saímos pra ir pro shopping e tu parou o caminho pra pegar uma jasmim pra mim eu fiquei tão bobo. Tu lembrou da minha flor favorita e ainda pegou uma pra me dar. Sempre que vejo jasmins no caminho de casa ou pro kadima eu lembro de ti, e SEMPRE pego elas pra sentir o cheirinho, porque agora me lembram desse momento. Tu fez a minha flor favorita se tornar muito mais especial, sabia? O cinema foi tão especial, nico. Aquele cinema é um dos melhores pra gente ir juntinhos, porque dá pra gente ficar agarradinhos sem levar xixi dos outros hehe. Eu achei o filme muito divertido, mas ficava o tempo todo prestando atenção em ti, principalmente quando tu tava deitadinho em mim. Tu é TÃO lindo, tão precioso, tão incrivel 🥺 Eu realmente sou o garoto mais sortudo do mundo por te ter. Naquele dia, nós não conseguimos ver os gatos de perto, mas pra mim não teve problema algum, porque eu passei o dia com o meu gatinho favorito e o único que eu quero pra mim! 💖🐈'
    }
];
let pass = false;

for (let i = 0; i < content.length; i++) {
    const card = document.createElement('div');
    card.classList.add('cube');
    const contents = `
        <div class="img"></div>
        <div class="texts">
            <h2>${content[i].title}</h2>
            <p>${content[i].date}</p>
        </div>
`;
    card.innerHTML = contents;
    let photo = card.querySelector('.img');
    photo.style.backgroundImage = `url(${content[i].src})`;

    card.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        body.style.overflow = 'hidden';
        addBigPhoto.innerHTML = '';
        darker.style.display = 'flex';
        centerElements.style.zIndex = '3';
        const bigCard = document.createElement('div');
        bigCard.classList.add('cube');
        bigCard.id = 'big';
        bigCard.innerHTML = contents;
        bigCard.querySelector('.img').style.backgroundImage = `url(${content[i].src})`;
        addBigPhoto.appendChild(bigCard);
        addBigPhoto.style.opacity = '1';

        const bigCardBack = document.createElement('div');
        bigCardBack.classList.add('cubeBack');
        bigCardBack.id = 'bigBack';
        bigCardBack.innerHTML = `
        <h3>${content[i].text}</h3>
        `;
        addBigPhoto.appendChild(bigCardBack);
        // if (mediaQuery.matches) { 
        //     document.querySelector("h3").style.fontSize = '';
        // } else {
        //     document.querySelector("h3").style.fontSize = `${content[i].mine}`;
        // }
        addBigPhoto.style.opacity = '1';
    });
    addPhotos.appendChild(card);
};

function closePhoto(event) {
    if (!addBigPhoto.contains(event.target)) {
        addBigPhoto.style.transform = 'rotateY(0deg)';
        pass = false;
        setTimeout(function () {
            addBigPhoto.style.opacity = '0';
            darker.style.opacity = '0';
            setTimeout(function () {
                addBigPhoto.innerHTML = '';
                darker.style.display = 'none'
                centerElements.style.zIndex = '-2';
                darker.style.opacity = '1';
                body.style.overflow = 'auto';
            }, 500);
        }, 1000);
    } else {
        if (pass === false) {
            addBigPhoto.style.transform = 'rotateY(180deg)';
            pass = true;
        } else {
            addBigPhoto.style.transform = 'rotateY(0deg)';
            pass = false;
        }

    };
};
