document.addEventListener("DOMContentLoaded", async function () {
    const title = document.getElementById('title');
    const menu = document.querySelector('dialog');
    const addPhotos = document.querySelector('.addPhotos');
    const addPhotosAfter = document.querySelector('.addPhotosAfter');
    const content = [
        {
            title: 'Pixar',
            date: '25/09/2023',
            src: '../assets/photos/pixar.jpg',
            qnt: 46,
            text: 'Nico, eu já disse que sempre tive uma quedinha por ti, né? Quando tu me chamou do nada no insta pra começar a falar comigo eu não achava que ia dar em algo. Pra mim era impossivel TU querer sair cmg e ter algo comigo (E quando tu me chamou pra sair, que eu tava no meio da aula, fiquei TODO derretido de amor e até falei pra minha amiga todo felizinho!) Na noite anterior, quando caiu a ficha de que eu ia sair com o nick loiro do insta eu comecei a ficar nervoso por achar que tu fosse se decepcionar comigo pessoalmente, e pra piorar eu fui tapado e me atrasei. Mas quando cheguei e te vi, meu coração se preencheu inteiro e eu só queria ficar pertinho de ti até a hora de ir embora. Quando a gente entrou, ficamos um do ladinho do outro bem pertinho, e tu escreveu "tu é mt mais bonito pessoalmente" sorrindo pra mim, meu coração derreteu TODINHO! Eu tava tão feliz naquela hora, e a cada sala que a gente passava eu criava mais coragem pra tentar segurar na tua mão (Internamente eu tava todo tímido e envergonhado, mas por fora tava tentando ser o mais extrovertido e confiante do mundo!). Tava até criando um plano na minha mente, de olhar uma proxima sala antes de ti enquanto tu escaneava o QR e te puxar fingindo que vi algo mega wow (Funcionou MUITO) e tu continuou segurando na minha mao 🥺 Foi um dia tão especial pra mim, e eu fiquei tão bobo quando tu só jogou a outra bolinha na minha sacola (Eu tava meio desligado naquela hora e ai eu fiquei :0 ♡u♡). Eu nunca tinha me sentido daquela forma antes, nico! Quando a gente tava se beijando no estacionamento e tu tinha teus mini surtinhos de felicidade e dizia que nao tava acreditando que tava ali eu pensei "Caraca eu devo estar sonhando mesmo". E se eu ainda tô, não quero acordar nunquinha 🥺💖 Foi um dos dias mais especiais da minha vida, e depois daquilo, não teve mais volta! A partir daquele dia eu comecei a pensar em ti o tempo todo. Nico, tu fez eu me apaixonar perdidamente por ti no primeiro encontro.'
        },
        {
            title: 'Wonka',
            date: '08/12/2023',
            src: '../assets/photos/lego.jpg',
            qnt: 4,
            text: 'Nesse dia eu confesso que eu tava nervoso e tímido também. Mas mesmo assim, quando cheguei e a gente começou a conversar eu me senti tão mais aliviado. Naquele dia eu comecei a ter certeza de que eu tava gostando de ti, e não era pouquinho. Foi tão divertido ver o filme do wonka contigo. Naquele dia, foi a primeira vez que deitamos um no ombro do outro, primeira vez que eu fiz carinho em ti e que tu fez em mim também. Foi tão especial pra mim que eu sentia que ia começar a flutuar, porque o filme era todo mágico e fofinho e eu tava vivendo um momento que nunca na minha eu imaginaria em viver, com o garoto que tava conquistando o meu coração. Eu sou meio resistente pra entregar meu coração, sabia? Mas contigo eu só sentia vontade de me entregar por completo de uma vez por todas, por todas as tuas qualidades,  por todos os teus aspectos, pelo garoto incrível que eu tava conhecendo. Ah, e também não podemos nos esquecer da minha mochila perdida por alguns minutos hehe ;P E também os milkshakes que a gente dividiu! Foi tão legal (E bem doce, só não tanto quanto o meu namorado 💖) 🤍🤎 (milkshake). Passamos pela cobasi pra ver os bichinhos fofos e os esquisitos, e eu te ouvi falar sobre os teus peixinhos (Até os que já se foram 💔). Conheci naquele dia um pouco mais do garoto dos meus sonhos.'
        },
        {
            title: 'Glasses',
            date: '08/12/2023',
            src: '../assets/photos/glasses.jpg',
            qnt: 2,
            text: 'Esse dia eu tava muito animado! Tinha ido pro colégio cedinho e saltitante pra fazer uma reavaliação e aumentar minha nota. Acho que nunca fui tão feliz pro colégio antes, e lembro que logo que acabei minha prova fui correndo pro banheiro do colégio, me arrumei lá e fui te ver! Tava até pensando nisso esses dias no colégio, sabia? Foi um dia MUITO legal. 💙 A gente montou nossos leguinhos (Um montou o do outro, lembra? Meu nico natalino hehe🎄❤️ (Aliás, sempre vou lembrar da gente no natal! Tu foi o melhor e mais importante presente que o papai noel já me deu. Sempre pensei assim, desde aquela época). O filme foi TÃO divertido e até levamos xixi da segurança, mas o importante é que passei mais da metade do filme agarradinho no meu príncipe e não deixei de te fazer carinho, mesmo estando com um braço de cinema entre a gente. Nada ia me impedir de cuidar de ti, e nunca vai! Ah e também tomamos açaí juntinhos, lembra? Foi nesse dia que eu ouvi "Eu te amo" do garoto que mais amei e que mais amo na vida pela primeira vez. Voltei tão sorridente pra casa depois, que vou chegar aos 25 com o rosto marcado de tanto sorrir. Mas pelo menos posso me exibir que foi meu namorado que fez eu ser tão feliz a ponto de levar isso nas marcas do meu rosto hehe >3<~~♡ Depois desse dia eu tinha certeza que eu te amo demais. Decidi que não vou deixar ninguém te tirar de mim, e que eu vou ser o melhor namorado do mundo (Porque eu já tava sonhando em te namorar hehe). Antes a gente se segurava tanto, mas agora eu posso dizer infinitamente que Eu te amo infinitamente!'
        },
        {
            title: '"Work Day"',
            date: '22/12/2023',
            qnt: 2,
            src: '../assets/photos/Wday.jpeg',
            text: 'Nesse dia, tu foi me buscar lá na estação em Porto Alegre. Tu tava tão fofo e tão lindo naquele dia 💗 Consigo me lembrar de ti esperando do meu lado o trem chegar, e da gente ouvindo músicas juntos. Ah, e eu lembro de quando tu pesquisou loona no spotify e colocou Heart Attack pa gente ouvir. Foi TÃO fofo, meu coração derreteu todinho 🥺. Eu tava muito animado naquele dia e foi a primeira vez que ficamos juntos num lugar sozinhos. Quando a gente foi almoçar eu tava morrendo de timidez, mas fui perdendo enquanto a gente caminhava pela unisinos. Lá que eu acabei dando oi pro pessoal do senac KSKS. Quando a gente chegou no escritório e ficamos juntos, eu me senti tão bem! Foi tão divertido jogar contigo pela primeira vez e ver tu me ensinando sobre o Call of Duty. Sempre me xingam quando jogo CoD mas tu me deixou muito confortável e eu me senti muito bem jogando contigo. Aí a gente foi ver filme e pela primeira vez a gente foi um pouco além dos beijos. Aquele dia eu me senti como eu nunca tinha me sentido antes. Eu senti tanto prazer e só de pensar que eu tava fazendo aquilo contigo me deixava ainda mais feliz. Te vi de cuequinha pela primeira vez hehe! Foi muito especial pra mim e nunca vou esquecer desse dia 💖'
        },
        {
            title: 'Nico`s house sleepover',
            date: '12/01/2024',
            src: '../assets/photos/nHS.jpg',
            qnt: 15,
            text: 'Esse foi com certeza o nosso melhor date de todos! O meu favorito. Foi a segunda vez que andei de trem e aqui eu já tava mais profissional (Mesmo estando sozinho! Mas tinha meu nico pra me guiar se precisasse, e pelo meu amorzinho eu vou até São Leo a pé se precisar 😼) Quando cheguei e te vi com a lambretta fiquei tão feliz (E confesso que fiquei com muito medo de deixar a gente cair por me desequilibrar KSKSKSK). Mas deu tudo certo e chegamos na tua casa. Eu tava bem tímido mas tava me sentindo muito feliz, ainda mais depois que tu me deu o buquê de flores de papel que eu guardo até hoje com o maior carinho do mundo 🥺💖 Foi tão fofo! A gente assistiu filminho juntos, jogamos juntos, e pela primeira vez nós fomos além juntos. Eu nunca tinha ficado daquele jeito antes e naquele dia a gente deu um passo muito grande na nossa relação, pelo menos na minha visão. Eu me senti muito confortável contigo e me senti muito bem também. A gente cruzou uma linha que tava pouco a pouco sendo ultrapassada e então finalmente tu preencheu todo o meu coração. Eu nunca tinha nem encostado direito num VR antes e sempre quis jogar beat saber pq AMO jogos de ritmo! A minha primeira vez não podia ser mais divertida e minha companhia não poderia ser melhor 😸💖 Além disso eu dirigi pela primeira vez num simulador e foi MTT divertido, mas ao mesmo tempo desafiador (Mas não se preocupa que teu nokinho aqui já tá profissa😎). Ah, e não tem como esquecer 🥺 Eu te ouvi tocar pianos pela primeira vez. Foi tão mágico, meu amor, eu tava vendo o garoto que faz meu coração estremecer e aquecer, o garoto mais lindo que eu já vi, tocando piano pra mim, e músicas que eu gostava e conhecia. Eu me arrepiei naquela hora e sentia que ia flutuar, e achava muito fofo quando tu dizia que nunca tinha ficado tão nervoso pra tocar piano hehe. Tu me conquistou ainda mais naquele momento, nico. Falando em conquistar, tu não gostar de pizza de queijo não me faz te amar menos, viu? Quando a gente deitava juntinhos no escuro, meu corpo inteiro relaxa e a minha mente esvaziava. Tu preenchia meu corpo todo e todos os meus pensamentos, e assim tu me deixava totalmente alegre. Eu sorria pro nada só de perceber onde eu tava e com quem eu tava. Eu tava torcendo muito pra não fazer nenhuma bobagem dormindo (Porque eu me mexo MUITO) e acabei virando um TRATOR SEM QUERER. MAS que bom que tu não terminou comigo por isso, hehe >3<~~♡♡♡ Aquela madrugada também foi muito especial, e ver bolt contigo foi sensacional. Sempre lembro de ti quando vejo qualquer coisa relacionada ao filme. Quando eu acordei no outro dia as 15h da tarde eu pensei "meu deus não acredito que acordei tão tarde, ele deve estar irritado comigo". Mas aí tu apareceu com panquequinhas feitas pra mim 🥺 Eu fiquei TÃO feliz naquele momento, me senti tão especial. Tu é a única pessoa que faz eu me sentir assim, nico. Totalmente preenchido e feliz, totalmente amado. Foram as melhores panquecas que eu já comi💖 Meu nico chefe cozinheiro hehe. A gente jogou gang beasts e cod e mesmo tendo sido humilhado, foi muito divertido. Mas infelizmente chegou ao fim e tive que ir pra casa 💔 E tu me deu balinhas e chocolatinhos pra levar pra casa! Foi tão fofo e eu tentava comer o menos possível pra poder guardar por mais tempo (Alias, nao joguei fora a caixinha de nerds, sabia?). Ah e na segunda vez que andei de lambretta já tava profissional bb😎 Na próxima vou nem tremer na base! Voltei todo sorridente naquele dia, ouvindo música e pensando em ti. Tava totalmente apaixonado e tinha vivido um dos melhores dias da minha vida todinha 🩵💙 Sempre penso nesses dias, sabia? Foi incrível, nunca vou me esquecer. Tu me faz muito bem e mesmo tendo um texto enorme pra falar sobre esse dia, ainda não é o suficiente pra expressar o quão significativo foi pra mim 🥺💖'
        },
        {
            title: 'Shopping de Cabelo Lindo',
            date: '17/01/2024',
            src: '../assets/photos/nokosHair.jpeg',
            qnt: 2,
            text: 'Nesse dia eu fui muito nervoso porque eu sabia que meu cabelo tava horrível e tinha chorado no dia anterior porque achava que tava feio demais pra ti e que tu ia me trocar por outro garoto mais bonito. Mas eu fui mesmo assim porque precisava muito te ver antes de viajar, e também queria te entregar o presente que tinha comprado pra ti👉👈. Quando eu cheguei, e tu ficou me elogiando, eu me senti um pouco melhor, sabia? Tava inseguro mas tava feliz contigo e tu fez eu me sentir muito melhor. Foi incrível ter saído contigo e a gente, apesar de termos ficado pouco tempo juntos, aproveitamos muito pra conversar e passear pelo shopping. Ter te visto naquele dia foi incrível e muito importante pra mim, meu amor! 💖 Muito obrigado (Ah e foi nesse dia que o segurança ficou traumatizado e a gente descobriu que o kart do iguatemi é uma facada de preço)'
        },
        {
            title: 'Patinação',
            date: '02/02/2024',
            src: '../assets/photos/patinacao.gif',
            qnt: 31,
            text: 'ESSE DIA FOI TÃOO LEGAL!! Nunca tinha patinado no gelo antes e a primeira vez foi com o garoto mais especial da minha vida todinha! Nunca tinha naquele shopping antes, e ele é muito bom. Fiquei te esperando na frente do fliperama e fiquei tão feliz quanto te vi 😸 Já tava mais confiante em relação ao cabelo, mesmo que ainda não totalmente. Eu tive que aprender a patinar na marra, mas foi muito divertido patinar contigo (Ainda mais que tu é profissional nisso. Vou conseguir dar saltos lindos algum dia viu! Podemos patinar de novo algum dia ♡) Depois fomos pro parque, e foi TÃO gostosinho. Aquele parque é perfeito pra gente ficar juntinhos, podemos ir mais vezes também (Talvez um piquenique com as telas pra pintarmos juntos? Qualquer coisa contigo!) Foi um dia MUITO especial e MUUUIITO gostosinho. Eu te amo demais, nico 💖💖💖 Ah e a gente também mediu os nossos dedos nesse dia hehe 😸 Me senti muito feliz'
        },
        {
            title: 'Valentine`s Day',
            date: '14/02/2024',
            src: '../assets/photos/valentines.png',
            qnt: 21,
            text: 'Acho que esse é o meu segundo favorito! Foi um dia INCRÍVEL. Nunca tinha feito nada no dia dos namorados antes, sabia? Tu foi o primeiro de todos, hehe. Eu tinha encomendado tuas flores e tinha me atrasado um pouquinho porque tinha ido buscar elas (E por isso demorei um tempão pra mandar minha loc!) Eu queria que fosse mais surpresa do que foi, porque não sabia onde tu tava e tu me viu com as flores logo que eu desci do carro hehe😸 Mas foi INCRÍVEL! Assistir filme contigo no parque, conversar, fazer carinho em ti e o clima gostosinho. Me senti tão amado e tão feliz naquele dia. Ah e tu tava TÃO lindo! Ver teus olhos e teu cabelo no sol foi sensacional, tu fica perfeito 🥺 Depois fomos passear pelo shopping e tomar açaí juntinhos, que foii o melhor açaí de todos com minha pessoa favorita do mundo. Aliás, fiquei felizinho com as atendentes falando do buquê (Sinal pra ti ficar cmg hein 😏). Me senti muito à vontade contigo naquele dia e muito feliz tbm! Minha autoestima tava bem mais alta do que nos outros dias e tu tava TÃO lindo. Melhor dia dos namorados que eu poderia ter (E ainda ganhei uns pontos com a sogrinha heinn). Fui pra casa todo sorridente e quando cheguei fiquei ainda mais. Recebi o buquê mais lindo do mundo 🥺 Não me aguentei naquele dia e chorei de felicidade, o meu coração tava querendo sair do meu peito de tanta felicidade e eu tive ainda mais certeza de que É TUU, nico. Todo mundo falando pra mim, que é TU! E eu tive certeza disso nesse dia, sabia? Tem que ser tu, porque tu é o único que faz eu me sentir da forma que eu me sinto. O único que eu quero dar o meu máximo e presentear com todas as coisas do mundo. Tu é tudo pra mim 💖 Só de lembrar meu peito já quer explodir de amor!!!'
        },
        {
            title: 'Affogato & Cinema',
            date: '17/02/2024',
            src: '../assets/photos/affogato.jpeg',
            qnt: 17,
            text: 'Eu SEMPRE quis ir pra um cat café, sabia? E fui pela primeira vez contigo (Já deu pra perceber que tive muitas primeiras vezes contigo, né? Hehe, da melhor forma possível!) No café foi TÃO lindo! Tu tava muito gato e o lugar era MUITO fofo. As comidinhas eram perfeitas e o ambiente mtmtmt fofinho (Mas eu confesso que eu tava meio timidozinho 👉👈). Quando saímos pra ir pro shopping e tu parou o caminho pra pegar uma jasmim pra mim eu fiquei tão bobo. Tu lembrou da minha flor favorita e ainda pegou uma pra me dar. Sempre que vejo jasmins no caminho de casa ou pro kadima eu lembro de ti, e SEMPRE pego elas pra sentir o cheirinho, porque agora me lembram desse momento. Tu fez a minha flor favorita se tornar muito mais especial, sabia? O cinema foi tão especial, nico. Aquele cinema é um dos melhores pra gente ir juntinhos, porque dá pra gente ficar agarradinhos sem levar xixi dos outros hehe. Eu achei o filme muito divertido, mas ficava o tempo todo prestando atenção em ti, principalmente quando tu tava deitadinho em mim. Tu é TÃO lindo, tão precioso, tão incrivel 🥺 Eu realmente sou o garoto mais sortudo do mundo por te ter. Naquele dia, nós não conseguimos ver os gatos de perto, mas pra mim não teve problema algum, porque eu passei o dia com o meu gatinho favorito e o único que eu quero pra mim! 💖🐈'
        },
        {
            title: 'Pulseiras',
            date: '12/03/2024',
            src: '../assets/photos/pulseiras.JPG',
            qnt: 8,
            text: 'Nesse dia eu tava tão animado que ia finalmente te ver depois de quase um mês longe. Eu levei uma roupa pra trocar no colégio e minhas coisas pra ir o mais arrumado possível (mesmo indo depois da aula, que fico um CACO). No trem eu tava todo animado indo todo sorridente (É sério, eu tava quase explodindo de alegria). E acho que foi conexão a nossa chegada ao mesmo tempo no lugar que tu disse pra gente se encontrar <3 Andar de lambretta de novo foi MUITO legal (Eu fiquei com menos medo, mas não é nulo ainda DKASKDKAS mesmo assim eu acho muito divertido). Eu conheci o toby, que é MUUUIITO fofo!!!! E recebi vários presentes do meu amor 🥺 Uma monster do mario com uma lata MUITO fofa que eu tô até agora com pena de abrir (E só vou abrir quando estivermos juntos), um pacotão do melhor doce de doce de leite do MUNDO é MTTTT bom! E a pulseira mais linda do mundo e da minha cor favorita de todas🥺💗 Não consigo resistir e PRECISO usar ela em todo lugar que vou, porque faz eu me sentir conectado com o amor da minha vida (Pra quem não sabe, é o Nicolas Toldo okay). A gente não pode esquecer da nossa luta de sabre de luz (sem luz!) que foi incrível hehe ❤️_❤️ Depois nós fomos passear e ir pro cinema assistir um filme de terror duvidoso e foi MUITO legal, eu AMO assistir filme duvidoso KSKSKS e foi muito gostosinho passar tempo contigo nesse dia, mesmo que tenha voado🥺 E nesse dia, infelizmente meu gatinho tava muito ansioso por causa das câmeras (e no modo FBI) mas eu espero que eu tenha conseguido tranquilizar um pouquinho. No fim, deu tudo certo né 💝 Mas eu fui embora com ainda mais saudade do que antes, porque uma tarde não era nada suficiente pra acabar com a falta que eu sinto de ti, amor. Te ver chorar no carro e não poder te abraçar, fazer carinho e mimir contigo naquele dia doeu muito🥺 Eu te amo demais e quero te proteger de todo mal do mundo. Foi um dia incrível, com a pessoa mais incrível do mundo todinho, e além disso, eu recebi o melhor presente do mundo, que vou carregar comigo sempre ❤️'
        },
        {
            title: 'O Menino e a Garça',
            date: '19/03/2024',
            src: '../assets/photos/meninoegarca.JPG',
            qnt: 24,
            text: 'Nesse dia aconteceu a mesma coisa, levei roupa extra pro colégio pra poder ir te ver menos feio do que eu fico no colégio. E foi um dia incrível. Esse dia foi tão leve e divertido, amor! A gente aproveitou muito nosso tempo juntos assistindo filme, provando bobba, jogando juntos. Quando a gente tava no cinema assistindo o filme que eu esperei por tanto tempo, foi incrível, porque pudemos ficar juntinhos já que os braços levantavam (Esses cinemas são perfeitos). Te ver dormindo no meu colo foi tão, TÃO fofo, amor <3 Queria viver aquele momento todos os dias contigo, poder fazer carinho em ti enquanto tu descansa agarradinho no meu braço. Além disso, foi MUITO divertido jogar contigo no fliperama (Eu sempre joguei taiko sozinho, e ter alguém pra jogar comigo foi incrível). Também, foi o dia que provei bobba pela primeira vez, de um jeito muito especial (E é gostoso DEMAISS, eu amei muito e quero tomar mais vezes contigo, mozin). No fim, fomos pro estacionamento bem onde saímos pela primeira vez, e foi muito legal revisitar contigo ali (Mesmo que agora esteja vazio sem mundo pixar e nem nada hehe).'
        },
        {
            title: 'Milky Moo',
            date: '23/03/2024',
            src: '../assets/photos/milkymoo.JPG',
            qnt: 5,
            text: 'Nesse dia eu senti um misto de emoções. Eu tava muito feliz que ia poder te ver e tava pensando em te chamar pra ir pro Park Shopping antes de tu me chamar pra ir hehe. A gente tava com um clima meio estranho por causa das coisas que tinham acontecido recentemente, e o clima ficou mais ou menos assim por um bom tempo durante o date. Eu confesso que não foi a melhor sensação do mundo, mas fez eu perceber o quanto eu me importo contigo e o quão valioso tu é pra mim. Nesse dia, eu sentia nesses momentos vontade de fazer tudo voltar ao normal pra poder segurar na tua mão, rir das coisas mais bobas e das piadas mais idiotas que nós pudessemos fazer e ficar passeando aleatoriamente pra encontrarmos algo pra fazer juntos. Nesse dia eu percebi ainda mais que se eu te perder eu vou ficar sem rumo nenhum, porque tu é tudo o que eu quero ter por perto e é a coisa que mais faz diferença na minha vida. Olhando pelo lado bom, mesmo que tenha sido ruim esse tipo de situação, eu acho que de certa forma nos aproximou um pouco mais, porque mostrou que mesmo num momento ruim, nós não desistimos um do outro e sim lutamos pra continuarmos juntos e reconhecemos as fraquezas um do outro. Eu percebi que eu te amo muito mais do que eu achava que te amava, nico (E eu não achava pouco do meu amor por ti, porque ele é gigantesco e não cabe nos meus 1,82). Nesse dia eu senti e vi pela primeira vez tu chorando de tristeza :( Meu coração sentiu um aperto absurdo e eu só queria te confortar e te deixar feliz naquela hora, amor. E nem pense em pedir desculpas por isso, porque o meu papel principal é te fazer feliz, meu amor. Isso inclui confortar o meu príncipe quando estiver mal dessa forma. Sabe nico, aquilo que falei sobre me esforçar pra te confortar mesmo se eu estiver bravo, é real. Eu nunca vou te deixar na mão, nunca! Falando das partes boas, nós tomamos milky moo juntos e era DELICIOSO, nós estávamos muito bonitos e tiramos algumas das minhas fotos favoritas juntos e passamos um tempinho gostoso juntos no fim. Eu também percebi nesse dia que conversar pessoalmente contigo sobre os nossos problemas é muito melhor doq ue conversar pelo celular, e que tu é a única pessoa que eu me sinto a vontade pra conversar sobre meus sentimentos dessa forma. Eu vou ser sincero, as vezes lembro de ti na época que tu era o Nick loiro bonito do meu insta, e eu nunca poderia imaginar que estariamos desse jeito hoje. É absurdo, de uma forma muito positiva. (E não podemos esquecer do adrianzito hehe). Nico, tu define minha felicidade e bem estar, e eu assumo isso do fundo do meu coração. Eu dependo de ti pra ser feliz, porque eu quero estar junto contigo e feliz junto contigo. Não quero que seja uma relação unilateral, por isso vou sempre me esforçar por nós dois e dar o máximo do meu amor por ti, pra fazer nós dois sermos feliz juntos. Eu te amo demais, e vou lutar contra tudo e todos que ameaçar nossa relação ou o meu príncipe. Meu papel é te dar muito amor, carinho e te proteger de qualquer mal (E também, dar muita atenção pro meu gatinho. Esse foi outro ponto muito importante desse dia). Foi um dia muito importante, e acho que depois das nossas conversas desse dia vamos ter uma relação muito muito melhor <3 Vou apostar tudo em nós, nico, porque eu sei que vai valer a pena.'
        },
        {
            title: 'Melhor esfirra do mundo',
            date: '28/03/2024',
            src: '../assets/photos/esfirra.JPG',
            qnt: 10,
            text: 'Esse dia foi muito foda e muito louco ao mesmo tempo, porque tinha tudo pra dar errado mas eu fiz dar certo e fui te ver mesmo tarde da noite hehe. Foi incrivel e valeu muito a pena ter ído jantar contigo, porque tua companhia foi incrível e aquela esfirra é MTT boa sério! (E baratinha também) Precisamos ir mais vezes. Eu tava louco de saudade de ti e PRECISAVA te ver antes de tu ir pra praia 🥺 Além disso, recebi o melhor presente de Páscoa da minha vida. Fiquei tão feliz e animado, tu não tem noção! Voltei pra casa saltitante de felicidade. Eu também entreguei o presentinho que tinha comprado fazia um tempinho já, e tava muito animado e feliz por finalmente te entregar 💖💖💖💖 Valeu a pena pra krl ter ido te ver e agora sei que posso pegar trem de noite (Levando meu carregador!) pra ver o meu namorado perfeito. Foi uma noite incrível (mas que não deu pra matar nadinha de saudade, precisava muito de mais nico naquela noite. Te amo demais💖💖💖'
        },
        {
            title: 'Kung Fu Panda na Páscoa',
            date: '31/03/2024',
            src: '../assets/photos/kungfupascoa.JPG',
            qnt: 16,
            text: 'Um dos meus dates favoritos! Foi muito legal a gente marcando em cima da hora e fazendo acontecer 💖 Consegui entregar o presente de Páscoa do meu gatinho, experimentamos os chapéus, passamos muito tempo juntos no cinema e ainda dividimos milkshake. Nesse dia, eu me senti muito à vontade contigo, nico. Aquele nervosismozinho já tá quase inexistente, e to ficando cada vez mais confortável e à vontade contigo. Tivemos umas conversas importantes também nesse dia, que fizeram eu enxergar ainda mais o garoto perfeito que tu é. Eu te amo mais do que tudo e nada vai mudar isso, meu príncipe lindo 💖 Amo dividir milkshake contigo (E descobrimos uma nova maneira de fazer isso hehe)'
        },
        {
            title: 'Zathura',
            date: '05/04/2024',
            src: '../assets/photos/zathura.JPG',
            qnt: 17,
            text: 'Esse dia foi TÃO bom! Passei a semana sentindo a tua falta e quando finalmente te vi eu não consegui me conter. De todas as vezes que nós saímos essa foi a vez que eu mais te abracei e beijei igual um carentola. Foi o nosso 15° date, um dia antes de completarmos 150 dias desde que começamos a conversar, e foi muito especial. Nós almoçamos juntos (aquele hamburguer caro pra krl mas era mt bom❤️_❤️) jogamos mario juntos (FOI MT LEGAL e é muito fofo te ver jogar) e assistimos filminho juntos 🥺 Foi MUITO bom assistir filme contigo, porque eu nunca tinha visto aquele filme e era MTT BOM (Eu AMO filme antigo) mas minha parte favorita foi com certeza quando tu tava deitadinho em mim e dormindo 🥺 Eu AMO quando tu dorme em mim enquanto eu faço carinho em ti e te dou beijinho (até eu acabei caindo no sono um pouquinho). Foi muito gostosinho e sempre acabo lembrando desse momento (Dou um sorrisinho toda vez). Pode cair no sono em mim sempre, viu? Eu cuido de ti 💖 Não podemos esquecer do açaí mais nutelludo do mundo que tava MT gostoso, e da nossa sessão de fotos com chapéus e óculos de natação (Me apaixonei de novo por ti😿💘) Foram as fotos mais bobas que a gente já tirou juntos e umas das minhas favs KSKAKA Quando estávamos na rua abraçados eu só tava torcendo pra que demorasse muito pro teu uber chegar. Sempre dói pra dizer tchau, mas dessa vez eu não tava pronto pra te ver ir embora. Doeu demais dizer tchau :( Eu só queria te segurar ali comigo por horas e horas, mas não tinha nem como. Então tive que dizer tchau e não consegui me segurar e fiquei lacrimejando igual bobo. Nós ouvimos música juntos enquanto tu ia embora e foi INCRÍVEL! Nico, eu tenho certeza de que tu é a pessoa certa pra mim. Eu me sinto muito bem contigo, e mesmo que eu sinta um pouco de vergonha e timidez contigo as vezes, eu me sinto muito confortável contigo. Tu é a minha pessoa favorita, nico🥺💖 Eu quero ser teu, pra sempre! Nós não tinhamos nada planejado mas inventamos um date diferente no shopping e foi PERFEITO. Eu voltei muito feliz pra casa porque só pensava no quanto eu te amo e no quão incrível tu é. Foi o 15° e vamos estar no 30° em menos de 150 dias, tenho certeza disso. Tu é o melhor do mundo (e é só meu) 💘'
        },
        {
            title: 'Meu nokinho <3',
            date: '11/04/2024',
            src: '../assets/photos/miniNoko.jpg',
            qnt: 28,
            text: 'Mesmo não sendo um date, achei que iria ficar bonitinho colocar aqui! Queria começar te dizendo que eu te amo pra krl, eu corri um monte pra conseguir as alianças a tempo e terminar esse teu presente, eu realmente espero que tenha gostado 🥺💙. Tu é tudo pra mim, quando eu digo tudo, eu quero dizer que a única coisa que passa na minha cabeça é tu! Meu coração bate assim ó "- noko noko - noko noko -"! Pra mim só existe tu, acho que agora, mais do que nunca, tu nn precisa ter medo de me perder, eu to oficializando porque eu te amo, mais do que tudo, mais do que eu já amei qualquer coisa! Eu me esforço muito por ti, qualquer sorrisinho que eu consigo tirar de ti já me deixa muito feliz, a tua felicidade é a minha 💓💞! Noko, eu posso ser meio chatinho, ciumento e ter meu defeitos, mas eu sempre vou dar meu máximo por ti, qualquer coisa que tu precisar ou quiser é só me chamar, pode me pedir qualquer coisa, teus desejos são uma ordem, todos dias eu tento ser uma pessoa melhor pra ti, o parceiro que tu merece.. Desde o nosso primeiro date até o dia de hoje, eu continuo super mega hiper apaixonado por ti, cada encontro nosso eu me apaixono mais ainda, eu percebo ainda mais que é do teu lado que eu quero estar.. Falando em date, eu fico muito feliz que a gente consiga sair para lugares e fazer coisas diferentes juntos, cada date é muito especial pra mim, alguns mais do que outros, eu ainda não consigo entender muito o porque, mas tem uns que são mágicos 🤩. Bate aquela ansiedade antes de tu chegar, fico pensando em um milhão de coisas "será q eu to bnt?" "to com a boca suja??" "qual roupa ele deve estar usando?" "o que dá pra gnt fzr hj??" "será que ele já comeu??" "por onde ele tá vindo meudeus??? e pq tá demorando????? 😰"... Sério, é uma emoção enqt tu não chega, chego a calcular o tempo que leva da onde tu ta até eu KSSKKSKS meudeus nn termina, agr nn pode, tá de aliança, 3 meses no mínimo pra poder começar a pensar nisso, por favor kkkkkkkk 😰💙. Acho que embora a gnt já tenha brigado algumas vezes, a gnt sempre conversou e achou uma solução para os nossos problemas, provando que nosso amor é mais forte que qualquer coisa, mesmo diante dessas “dificuldades” a gnt saiu firme e mais forte ainda! Quero terminar dizendo que eu sou o menino mais sortudo do mundo por te ter, meu sonho era ter um menino lindo, gostoso, fofo, com um corpo perfeito, cheio de nerdolices, ciumentinho, cabeludinho, alguém que eu me sentisse bem, que se preocupasse cmg, que pudesse maratona filmes de terror e geek e ainda jogar juntos 🥺, eu realmente achei esse alguém, esse alguém é tu, meu amor 😍❤️. Eu te amo mais que tudo, tu é tudo pra mim, essa foi só uma demonstração do meu amor, espero q tenha aderido ao pacote completo quando eu ofereci hehehe ❤️🧡💛💚💙💜🖤🤍🤎💖💘💝💞💟❣️💕💔💓. Espero q a gente esteja aproveitando muito o dia de hoje, juntinhos! Que nenhum viado se atire em ti, pq tu tá divino 😮, e que tenha gostado dos presentes! Heheheh LOVE UUUUUU 😻💝'
        },
        {
            title: 'Buzz 💍',
            date: '14/04/2024',
            src: '../assets/photos/buzz.png',
            qnt: 50,
            text: ''
        },
        {
            title: 'Niver da sogrinha',
            date: '20/04/2024',
            src: '../assets/photos/niversogrinha.png',
            qnt: 2,
            text: ''
        }
    ];


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
            window.scroll({
                top: 0,
                behavior: "smooth"
            })
            addPhotos.innerHTML = '';
            let af = addPhotos;
            for (let a = 1; a <= content[i].qnt; a++) {
                setTimeout(function () {
                    let cardO = document.createElement('div');
                    cardO.classList.add('cube');
                    cardO.innerHTML = `
            <div class="img"></div>
    `;
                    let photoO = cardO.querySelector('.img');
                    let formatoImg = (a === 5 && i + 1 === 16 || a === 16 && i + 1 === 16) ? 'gif' : 'png';
                    photoO.style.backgroundImage = `url(https://firebasestorage.googleapis.com/v0/b/adrianico-bf656.appspot.com/o/${i + 1}%2F${a}%20.${formatoImg}?alt=media)`
                    af.appendChild(cardO);
                    if (a === 2) {
                        document.querySelector(".writeContent").innerHTML = `
                <p class="pTexts">${content[i].text}</p>
                `
                        af = addPhotosAfter;
                    }
                }, 600)

            }

        });
        addPhotos.appendChild(card);
    };

    title.addEventListener("click", function () {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
        menu.style.top = '0';
        document.addEventListener("click", function (event) {
            if (event.target === menu || event.target !== title && event.target !== menu) {
                menu.style.top = '-100vw';

            }
        });
    });
});