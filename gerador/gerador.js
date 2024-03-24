document.addEventListener('DOMContentLoaded', () => {
    const frasesComAutores = [
        { frase: "Regozijai-vos sempre. Orai sem cessar. Em tudo dai graças, porque esta é a vontade de Deus em Cristo Jesus para convosco.", autor: "1 Tessalonicenses 5:16-18" },
        { frase: "O amor é sofredor, é benigno; o amor não é invejoso; o amor não trata com leviandade, não se ensoberbece, não se porta com indecência, não busca os seus interesses, não se irrita, não suspeita mal.", autor: "1 Coríntios 13:4-5" },
        { frase: "O perfeito amor lança fora o medo.", autor: "1 João 4:18" },
        { frase: "Mas os que esperam no Senhor renovarão as suas forças e subirão com asas como águias; correrão e não se cansarão; caminharão e não se fatigarão.", autor: "Isaías 40:31" },
        { frase: "E estas palavras que hoje te ordeno estarão no teu coração; e as intimarás a teus filhos e delas falarás assentado em tua casa, e andando pelo caminho, e deitando-te, e levantando-te.", autor: "Deuteronômio 6:6-7" },
        { frase: "E eles disseram: Crê no Senhor Jesus Cristo e serás salvo, tu e a tua casa.", autor: "Atos 16:31" },
        { frase: "Ora, a fé é o firme fundamento das coisas que se esperam e a prova das coisas que se não veem.", autor: "Hebreus 11:1" },
        { frase: "Disse-lhe Jesus: Eu sou a ressurreição e a vida; quem crê em mim, ainda que esteja morto, viverá; e todo aquele que vive e crê em mim nunca morrerá. Crês tu isso?", autor: "João 11:25-26" },
        { frase: "Com toda a humildade e mansidão, com longanimidade, suportando-vos uns aos outros em amor.", autor: "Efésios 4:2" },
        { frase: "E servireis ao Senhor, vosso Deus, e ele abençoará o vosso pão e a vossa água; e eu tirarei do meio de ti as enfermidades.", autor: "Êxodo 23:25" },
        { frase: "O Senhor, pois, é aquele que vai adiante de ti; ele será contigo, não te deixará, nem te desamparará; não temas, nem te espantes.", autor: "Deuteronômio 31:8" },
        { frase: "Portanto, meus amados irmãos, sede firmes e constantes, sempre abundantes na obra do Senhor, sabendo que o vosso trabalho não é vão no Senhor.", autor: "1 Coríntios 15:58" },
        { frase: "Não te desamparem a benignidade e a fidelidade; ata-as ao teu pescoço; escreve-as na tábua do teu coração e acharás graça e bom entendimento aos olhos de Deus e dos homens.", autor: "Provérbios 3:3-4" },
        { frase: "E esta é a confiança que temos nele: que, se pedirmos alguma coisa, segundo a sua vontade, ele nos ouve.", autor: "1 João 5:14" },
        { frase: "Agora, pois, permanecem a fé, a esperança e o amor, estes três; mas o maior destes é o amor.", autor: "1 Coríntios 13:13" },
        { frase: "E, sobre tudo isto, revesti-vos de amor, que é o vínculo da perfeição.", autor: "Colossenses 3:14" },
        { frase: "Não to mandei eu? Esforça-te e tem bom ânimo; não pasmes, nem te espantes, porque o Senhor, teu Deus, é contigo, por onde quer que andares.", autor: "Josué 1:9" },
        { frase: "Alegrai-vos na esperança, sede pacientes na tribulação, perseverai na oração.", autor: "Romanos 12:12" },
        { frase: "Cada um contribua segundo propôs no seu coração, não com tristeza ou por necessidade; porque Deus ama ao que dá com alegria.", autor: "2 Coríntios 9:7" },
        { frase: "Portanto, vede prudentemente como andais, não como néscios, mas como sábios, remindo o tempo, porquanto os dias são maus.", autor: "Efésios 5:15-16" },
        { frase: "E Jesus disse-lhe: Se tu podes crer; tudo é possível ao que crê.", autor: "Marcos 9:23" },
        { frase: "E nós conhecemos e cremos no amor que Deus nos tem. Deus é amor e quem está em amor está em Deus, e Deus, nele.", autor: "1 João 4:16" },
        { frase: "Não sabeis que os injustos não hão de herdar o Reino de Deus? Não erreis: nem os devassos, nem os idólatras, nem os adúlteros, nem os efeminados, nem os sodomitas, nem os ladrões, nem os avarentos, nem os bêbados, nem os maldizentes, nem os roubadores herdarão o Reino de Deus.", autor: "1 Coríntios 6:9-10" },
        { frase: "Antes, sede uns para com os outros benignos, misericordiosos, perdoando-vos uns aos outros, como também Deus vos perdoou em Cristo.", autor: "Efésios 4:32" },
        { frase: "Ora, o Senhor é Espírito; e onde está o Espírito do Senhor, aí há liberdade.", autor: "2 Coríntios 3:17" },
        { frase: "A sabedoria do prudente é entender o seu caminho, mas a insensatez dos tolos é engano.", autor: "Provérbios 14:8" },
        { frase: "Tudo posso naquele que me fortalece.", autor: "Filipenses 4:13" },
        { frase: "Porque eu sei os pensamentos que tenho a vosso respeito, diz o Senhor, pensamentos de paz, e não de mal, para vos dar o fim que esperais.", autor: "Jeremias 29:11" },
        { frase: "Confia no Senhor de todo o teu coração e não te estribes no teu próprio entendimento.", autor: "Provérbios 3:5" },
        { frase: "Ainda que eu andasse pelo vale da sombra da morte, não temeria mal algum, porque tu estás comigo; a tua vara e o teu cajado me consolam.", autor: "Salmos 23:4" },
        { frase: "Jesus Cristo é o mesmo, ontem, e hoje, e eternamente.", autor: "Hebreus 13:8" },
        { frase: "Lançando sobre ele toda a vossa ansiedade, porque ele tem cuidado de vós.", autor: "1 Pedro 5:7" },
        { frase: "O Senhor é meu pastor; nada me faltará.", autor: "Salmos 23:1" },
        { frase: "Eu sou o caminho, e a verdade, e a vida. Ninguém vem ao Pai senão por mim.", autor: "João 14:6" },
        { frase: "Porque Deus amou ao mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.", autor: "João 3:16" },
        { frase: "Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei.", autor: "Mateus 11:28" },
        { frase: "Mas buscai primeiro o reino de Deus, e a sua justiça, e todas estas coisas vos serão acrescentadas.", autor: "Mateus 6:33" },
        { frase: "Não te deixes vencer pelo mal, mas vence o mal com o bem.", autor: "Romanos 12:21" },
        { frase: "Tudo tem o seu tempo determinado, e há tempo para todo propósito debaixo do céu.", autor: "Eclesiastes 3:1" },
        { frase: "Se confessarmos os nossos pecados, ele é fiel e justo para nos perdoar os pecados e nos purificar de toda a injustiça.", autor: "1 João 1:9" },
        { frase: "Porque pela graça sois salvos, por meio da fé; e isto não vem de vós, é dom de Deus.", autor: "Efésios 2:8" },
        { frase: "Alegrem-se sempre no Senhor. Novamente direi: alegrem-se!", autor: "Filipenses 4:4" },
        { frase: "O Senhor luta por vós, e vós vos calareis.", autor: "Êxodo 14:14" },
        { frase: "A fé é o firme fundamento das coisas que se esperam, e a prova das coisas que não se veem.", autor: "Hebreus 11:1" },
        { frase: "O coração alegre aformoseia o rosto, mas pela dor do coração o espírito se abate.", autor: "Provérbios 15:13" },
        { frase: "Aquele que não ama não conhece a Deus; porque Deus é amor.", autor: "1 João 4:8" },
        { frase: "Assim, pois, todas as vezes que comemos deste pão e bebemos deste cálice, anunciamos a morte do Senhor, até que ele venha.", autor: "1 Coríntios 11:26" },
        { frase: "Seja a vossa moderação conhecida de todos os homens. Perto está o Senhor.", autor: "Filipenses 4:5" },
        { frase: "E não nos conduzas à tentação, mas livra-nos do mal.", autor: "Mateus 6:13" },
        { frase: "O fruto do justo é árvore de vida, e o que ganha almas sábio é.", autor: "Provérbios 11:30" },
        { frase: "Porque onde estiver o vosso tesouro, aí estará também o vosso coração.", autor: "Mateus 6:21" },
        { frase: "Não ameis o mundo, nem o que no mundo há. Se alguém ama o mundo, o amor do Pai não está nele.", autor: "1 João 2:15" },
        { frase: "Mas o fruto do Espírito é: amor, gozo, paz, longanimidade, benignidade, bondade, fé, mansidão, temperança.", autor: "Gálatas 5:22" },
        { frase: "Porque para Deus nada é impossível.", autor: "Lucas 1:37" },
        { frase: "Venham a mim, todos vocês que estão cansados e sobrecarregados, e eu lhes darei descanso.", autor: "Mateus 11:28" },
        { frase: "Combati o bom combate, acabei a carreira, guardei a fé.", autor: "2 Timóteo 4:7" },
        { frase: "Não se turbe o vosso coração; credes em Deus, crede também em mim.", autor: "João 14:1" },
        { frase: "Pois o Senhor dá a sabedoria; da sua boca é que vem o conhecimento e o entendimento.", autor: "Provérbios 2:6" },
        { frase: "Seja forte e corajoso; não tenha medo nem desanime, pois o Senhor, o seu Deus, estará com você por onde quer que você vá.", autor: "Josué 1:9" },
        { frase: "Mas os que esperam no Senhor renovarão as suas forças. Subirão com asas como águias; correrão, e não se cansarão; caminharão, e não se fatigarão.", autor: "Isaías 40:31" },
        { frase: "O Senhor é a minha luz e a minha salvação; de quem terei medo? O Senhor é o fortalecimento da minha vida; de quem recearei?", autor: "Salmos 27:1" },
        { frase: "Porque onde estiverem dois ou três reunidos em meu nome, ali estou no meio deles.", autor: "Mateus 18:20" },
        { frase: "Faz forte ao cansado e multiplica as forças ao que não tem nenhum vigor.", autor: "Isaías 40:29" },
        { frase: "Porque para Deus não haverá impossíveis em todas as suas promessas.", autor: "Lucas 1:37" },
        { frase: "Mas o Senhor é fiel; ele vos fortalecerá e guardará do mal.", autor: "2 Tessalonicenses 3:3" },
        { frase: "E conhecerão a verdade, e a verdade os libertará.", autor: "João 8:32" },
        { frase: "Deleita-te também no Senhor, e ele te concederá o que deseja o teu coração.", autor: "Salmos 37:4" },
        { frase: "Não te deixarei, nem te desampararei.", autor: "Hebreus 13:5" },
        { frase: "O meu socorro vem do Senhor, que fez os céus e a terra.", autor: "Salmos 121:2" },
        { frase: "Porque o Senhor dá a sabedoria, e da sua boca vem o conhecimento e o entendimento.", autor: "Provérbios 2:6" },
        { frase: "Chame por mim e eu responderei e lhe direi coisas grandiosas e insondáveis que você não sabe.", autor: "Jeremias 33:3" },
        { frase: "Vençam o mal com o bem.", autor: "Romanos 12:21" },
        { frase: "Não se amoldem ao padrão deste mundo, mas transformem-se pela renovação da sua mente, para que sejam capazes de testar e aprovar a vontade de Deus — sua boa, agradável e perfeita vontade.", autor: "Romanos 12:2" },
        { frase: "Honra teu pai e tua mãe, para que se prolonguem os teus dias na terra que o Senhor teu Deus te dá.", autor: "Êxodo 20:12" },
        { frase: "Mas, buscai primeiro o reino de Deus e a sua justiça, e todas estas coisas vos serão acrescentadas.", autor: "Mateus 6:33" },
        { frase: "O temor do Senhor é o princípio da sabedoria, e o conhecimento do Santo é entendimento.", autor: "Provérbios 9:10" },
        { frase: "Não se preocupem com nada, mas em tudo, por oração e súplicas, e com ação de graças, apresentem seus pedidos a Deus.", autor: "Filipenses 4:6" },
        { frase: "Perto está o Senhor de todos os que o invocam, de todos os que o invocam em verdade.", autor: "Salmos 145:18" },
        { frase: "Eu sou a videira; vós sois as varas. Quem permanece em mim e eu nele, esse dá muito fruto; porque sem mim nada podeis fazer.", autor: "João 15:5" },
        { frase: "E, tudo o que pedirdes em oração, crendo, recebereis.", autor: "Mateus 21:22" },
        { frase: "Aquele que diz estar nele, também deve andar como ele andou.", autor: "1 João 2:6" },
        { frase: "Portanto, animem-se uns aos outros e edifiquem-se mutuamente, assim como vocês já estão fazendo.", autor: "1 Tessalonicenses 5:11" },
        { frase: "Levem os fardos pesados uns dos outros e, assim, cumpram a lei de Cristo.", autor: "Gálatas 6:2" },
        { frase: "Alegrem-se na esperança, sejam pacientes na tribulação, perseverem na oração.", autor: "Romanos 12:12" },
        { frase: "Assim, em tudo, façam aos outros o que vocês querem que eles lhes façam; pois esta é a Lei e os Profetas.", autor: "Mateus 7:12" },
        { frase: "Eis que estou à porta e bato. Se alguém ouvir a minha voz e abrir a porta, entrarei em sua casa e cearei com ele, e ele comigo.", autor: "Apocalipse 3:20" },
        { frase: "Se alguém está em Cristo, nova criatura é; as coisas antigas já passaram; eis que tudo se fez novo.", autor: "2 Coríntios 5:17" },
        { frase: "Ele dá força ao cansado e aumenta o poder ao que não tem nenhum vigor.", autor: "Isaías 40:29" },
        { frase: "Porque, assim como os céus são mais altos do que a terra, assim são os meus caminhos mais altos do que os vossos caminhos, e os meus pensamentos mais altos do que os vossos pensamentos.", autor: "Isaías 55:9" },
        { frase: "Não se turbe o vosso coração; credes em Deus, crede também em mim.", autor: "João 14:1" },
        { frase: "Guarda o teu coração acima de tudo que se deve guardar; porque dele procedem as fontes da vida.", autor: "Provérbios 4:23" },
        { frase: "E disse Deus: Façamos o homem à nossa imagem, conforme a nossa semelhança.", autor: "Gênesis 1:26" },
        { frase: "Eu te louvarei, Senhor, de todo o meu coração; contarei todas as tuas maravilhas.", autor: "Salmos 9:1" },
        { frase: "Vençam o mal com o bem.", autor: "Romanos 12:21" },
        { frase: "Mas o Senhor está no seu santo templo; cale-se diante dele toda a terra.", autor: "Habacuque 2:20" },
        { frase: "Deleita-te também no Senhor, e ele te concederá o que deseja o teu coração.", autor: "Salmos 37:4" },
        { frase: "Jesus disse-lhe: Eu sou a ressurreição e a vida. Quem crê em mim, ainda que morra, viverá.", autor: "João 11:25" },
        { frase: "Porque a palavra de Deus é viva e eficaz, e mais cortante do que qualquer espada de dois gumes, e penetra até à divisão de alma e espírito, e de juntas e medulas, e é apta para discernir os pensamentos e intenções do coração.", autor: "Hebreus 4:12" },
        { frase: "E não sede conformados com este mundo, mas sede transformados pela renovação do vosso entendimento, para que experimenteis qual seja a boa, agradável, e perfeita vontade de Deus.", autor: "Romanos 12:2" },
        { frase: "O Senhor é minha luz e minha salvação; a quem temerei? O Senhor é a força da minha vida; de quem me recearei?", autor: "Salmos 27:1" },
        { frase: "Aquele que habita no esconderijo do Altíssimo, à sombra do Onipotente descansará.", autor: "Salmos 91:1" },
        { frase: "Vinde a mim, todos os que estais cansados e sobrecarregados, e eu vos aliviarei.", autor: "Mateus 11:28" },
        { frase: "Mas os que esperam no Senhor renovarão as suas forças; subirão com asas como águias; correrão, e não se cansarão; caminharão, e não se fatigarão.", autor: "Isaías 40:31" },
        { frase: "Clama a mim, e responder-te-ei, e anunciar-te-ei coisas grandes e firmes, que não sabes.", autor: "Jeremias 33:3" },
        { frase: "Agrada-te do Senhor, e ele satisfará os desejos do teu coração.", autor: "Salmos 37:4" },
        { frase: "Não por força nem por poder, mas pelo meu Espírito, diz o Senhor dos Exércitos.", autor: "Zacarias 4:6" },
        { frase: "Porque onde estiverem dois ou três reunidos em meu nome, aí estou eu no meio deles.", autor: "Mateus 18:20" },
        { frase: "O Senhor é o meu pastor; nada me faltará.", autor: "Salmos 23:1" },
        { frase: "Mas a misericórdia do Senhor é de eternidade a eternidade sobre aqueles que o temem, e a sua justiça sobre os filhos dos filhos;", autor: "Salmos 103:17" },
        { frase: "Se o meu povo, que se chama pelo meu nome, se humilhar, e orar, e buscar a minha face, e se converter dos seus maus caminhos, então eu ouvirei dos céus, e perdoarei os seus pecados, e sararei a sua terra.", autor: "2 Crônicas 7:14" },
        { frase: "E conhecereis a verdade, e a verdade vos libertará.", autor: "João 8:32" },
        { frase: "Não temas, porque eu sou contigo; não te assombres, porque eu sou teu Deus; eu te fortaleço, e te ajudo, e te sustento com a destra da minha justiça.", autor: "Isaías 41:10" },
        { frase: "Mas, buscai primeiro o reino de Deus e a sua justiça, e todas estas coisas vos serão acrescentadas.", autor: "Mateus 6:33" },
        { frase: "Assim diz o Senhor: Pára diante dos teus pés no caminho por onde andas, e pergunta pelas veredas antigas, qual é o bom caminho, e anda por ele; e achareis descanso para a vossa alma. Mas eles disseram: Não andaremos nele.", autor: "Jeremias 6:16" },
        { frase: "Porque, quem conheceu a mente do Senhor? Ou quem se fez seu conselheiro?", autor: "Romanos 11:34" },
        { frase: "Sede fortes e corajosos, não temais nem vos assusteis por causa do rei da Assíria, nem por causa de toda a multidão que está com ele; porque há um maior conosco do que com ele.", autor: "2 Crônicas 32:7" },
        { frase: "E disse-lhes: Ide por todo o mundo, pregai o evangelho a toda criatura.", autor: "Marcos 16:15" },
    ];

    const botaoGerar = document.getElementById('gerar-frase');
    const fraseElement = document.getElementById('frase');
    const autorElement = document.getElementById('autor');

    botaoGerar.addEventListener('click', () => {
        const selecionado = frasesComAutores[Math.floor(Math.random() * frasesComAutores.length)];
        fraseElement.textContent = `"${selecionado.frase}"`;
        autorElement.textContent = `- ${selecionado.autor}`;
    });
});

 //API MODERNA de clipboard.

 document.getElementById('copiar').addEventListener('click', function() {
    
    var frase = document.getElementById('frase').innerText;
    var autor = document.getElementById('autor').innerText;
    var textoCompleto = frase + " " + autor;

    // Utiliza a API Clipboard para copiar o texto.
    navigator.clipboard.writeText(textoCompleto).then(function() {
        
        console.log('Texto copiado com sucesso!');
        alert("Versiculo copiado: " + textoCompleto);
    }).catch(function(error) {
       
        console.error('Erro ao copiar o texto: ', error);
        alert("Erro ao copiar texto.");
    });
});



                                      
                    

  