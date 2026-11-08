/* 西班牙语动词变位 */
window.CONJ_ES = {
  lang: "es",
  label: "西班牙语",
  persons: ["yo", "tú", "él / ella", "nosotros", "vosotros", "ellos / ellas"],
  tenses: [["pres", "现在时"], ["pret", "简单过去时"], ["imp", "未完成过去时"], ["fut", "将来时"]],
  verbs: [
    {
      inf: "hablar",
      meaning: "说、讲话",
      group: "规则 -ar",
      forms: {
        pres: ["hablo", "hablas", "habla", "hablamos", "habláis", "hablan"],
        pret: ["hablé", "hablaste", "habló", "hablamos", "hablasteis", "hablaron"],
        imp:  ["hablaba", "hablabas", "hablaba", "hablábamos", "hablabais", "hablaban"],
        fut:  ["hablaré", "hablarás", "hablará", "hablaremos", "hablaréis", "hablarán"]
      },
      note: "第一变位规则动词，重音在词干后的元音上"
    },
    {
      inf: "comer",
      meaning: "吃",
      group: "规则 -er",
      forms: {
        pres: ["como", "comes", "come", "comemos", "coméis", "comen"],
        pret: ["comí", "comiste", "comió", "comimos", "comisteis", "comieron"],
        imp:  ["comía", "comías", "comía", "comíamos", "comíais", "comían"],
        fut:  ["comeré", "comerás", "comerá", "comeremos", "comeréis", "comerán"]
      },
      note: "第二变位规则动词，-er 结尾各有固定词尾"
    },
    {
      inf: "vivir",
      meaning: "生活、居住",
      group: "规则 -ir",
      forms: {
        pres: ["vivo", "vives", "vive", "vivimos", "vivís", "viven"],
        pret: ["viví", "viviste", "vivió", "vivimos", "vivisteis", "vivieron"],
        imp:  ["vivía", "vivías", "vivía", "vivíamos", "vivíais", "vivían"],
        fut:  ["viviré", "vivirás", "vivirá", "viviremos", "viviréis", "vivirán"]
      },
      note: "第三变位规则动词，nosotros 形式与 -er 相同"
    },
    {
      inf: "estudiar",
      meaning: "学习",
      group: "规则 -ar",
      forms: {
        pres: ["estudio", "estudias", "estudia", "estudiamos", "estudiáis", "estudian"],
        pret: ["estudié", "estudiaste", "estudió", "estudiamos", "estudiasteis", "estudiaron"],
        imp:  ["estudiaba", "estudiabas", "estudiaba", "estudiábamos", "estudiabais", "estudiaban"],
        fut:  ["estudiaré", "estudiarás", "estudiará", "estudiaremos", "estudiaréis", "estudiarán"]
      },
      note: "重音落在 -i 上，注意 estudié 与 estudió"
    },
    {
      inf: "trabajar",
      meaning: "工作",
      group: "规则 -ar",
      forms: {
        pres: ["trabajo", "trabajas", "trabaja", "trabajamos", "trabajáis", "trabajan"],
        pret: ["trabajé", "trabajaste", "trabajó", "trabajamos", "trabajasteis", "trabajaron"],
        imp:  ["trabajaba", "trabajabas", "trabajaba", "trabajábamos", "trabajabais", "trabajaban"],
        fut:  ["trabajaré", "trabajarás", "trabajará", "trabajaremos", "trabajaréis", "trabajarán"]
      },
      note: "规则 -ar 动词，各人称词尾完全规则"
    },
    {
      inf: "tener",
      meaning: "有、拥有",
      group: "不规则",
      forms: {
        pres: ["tengo", "tienes", "tiene", "tenemos", "tenéis", "tienen"],
        pret: ["tuve", "tuviste", "tuvo", "tuvimos", "tuvisteis", "tuvieron"],
        imp:  ["tenía", "tenías", "tenía", "teníamos", "teníais", "tenían"],
        fut:  ["tendré", "tendrás", "tendrá", "tendremos", "tendréis", "tendrán"]
      },
      note: "yo 加 -go，e 在重音时变 ie，过去时词干 tuv-"
    },
    {
      inf: "ser",
      meaning: "是（本质）",
      group: "不规则",
      forms: {
        pres: ["soy", "eres", "es", "somos", "sois", "son"],
        pret: ["fui", "fuiste", "fue", "fuimos", "fuisteis", "fueron"],
        imp:  ["era", "eras", "era", "éramos", "erais", "eran"],
        fut:  ["seré", "serás", "será", "seremos", "seréis", "serán"]
      },
      note: "最不规则动词之一，过去时与 ir 完全相同"
    },
    {
      inf: "estar",
      meaning: "在（状态）",
      group: "不规则",
      forms: {
        pres: ["estoy", "estás", "está", "estamos", "estáis", "están"],
        pret: ["estuve", "estuviste", "estuvo", "estuvimos", "estuvisteis", "estuvieron"],
        imp:  ["estaba", "estabas", "estaba", "estábamos", "estabais", "estaban"],
        fut:  ["estaré", "estarás", "estará", "estaremos", "estaréis", "estarán"]
      },
      note: "yo 加 -y，过去时词干 estuv-，注意重音符号"
    },
    {
      inf: "ir",
      meaning: "去",
      group: "不规则",
      forms: {
        pres: ["voy", "vas", "va", "vamos", "vais", "van"],
        pret: ["fui", "fuiste", "fue", "fuimos", "fuisteis", "fueron"],
        imp:  ["iba", "ibas", "iba", "íbamos", "ibais", "iban"],
        fut:  ["iré", "irás", "irá", "iremos", "iréis", "irán"]
      },
      note: "现在时极短，过去时与 ser 同形，靠语境区分"
    },
    {
      inf: "hacer",
      meaning: "做、制造",
      group: "不规则",
      forms: {
        pres: ["hago", "haces", "hace", "hacemos", "hacéis", "hacen"],
        pret: ["hice", "hiciste", "hizo", "hicimos", "hicisteis", "hicieron"],
        imp:  ["hacía", "hacías", "hacía", "hacíamos", "hacíais", "hacían"],
        fut:  ["haré", "harás", "hará", "haremos", "haréis", "harán"]
      },
      note: "yo 变 hago，过去时词干 hic-，第三人称 hizo"
    },
    {
      inf: "poder",
      meaning: "能够",
      group: "不规则",
      forms: {
        pres: ["puedo", "puedes", "puede", "podemos", "podéis", "pueden"],
        pret: ["pude", "pudiste", "pudo", "pudimos", "pudisteis", "pudieron"],
        imp:  ["podía", "podías", "podía", "podíamos", "podíais", "podían"],
        fut:  ["podré", "podrás", "podrá", "podremos", "podréis", "podrán"]
      },
      note: "o 在重音时变 ue，将来时词干 podr-"
    },
    {
      inf: "querer",
      meaning: "想要",
      group: "不规则",
      forms: {
        pres: ["quiero", "quieres", "quiere", "queremos", "queréis", "quieren"],
        pret: ["quise", "quisiste", "quiso", "quisimos", "quisisteis", "quisieron"],
        imp:  ["quería", "querías", "quería", "queríamos", "queríais", "querían"],
        fut:  ["querré", "querrás", "querrá", "querremos", "querréis", "querrán"]
      },
      note: "e 变 ie，过去时词干 quis-，将来时双写 r"
    },
    {
      inf: "saber",
      meaning: "知道",
      group: "不规则",
      forms: {
        pres: ["sé", "sabes", "sabe", "sabemos", "sabéis", "saben"],
        pret: ["supe", "supiste", "supo", "supimos", "supisteis", "supieron"],
        imp:  ["sabía", "sabías", "sabía", "sabíamos", "sabíais", "sabían"],
        fut:  ["sabré", "sabrás", "sabrá", "sabremos", "sabréis", "sabrán"]
      },
      note: "yo 形式为 sé，过去时词干 sup-，将来时 sabr-"
    },
    {
      inf: "venir",
      meaning: "来",
      group: "不规则",
      forms: {
        pres: ["vengo", "vienes", "viene", "venimos", "venís", "vienen"],
        pret: ["vine", "viniste", "vino", "vinimos", "vinisteis", "vinieron"],
        imp:  ["venía", "venías", "venía", "veníamos", "veníais", "venían"],
        fut:  ["vendré", "vendrás", "vendrá", "vendremos", "vendréis", "vendrán"]
      },
      note: "yo 变 vengo，e 变 ie，将来时词干 vendr-"
    },
    {
      inf: "decir",
      meaning: "说、告诉",
      group: "不规则",
      forms: {
        pres: ["digo", "dices", "dice", "decimos", "decís", "dicen"],
        pret: ["dije", "dijiste", "dijo", "dijimos", "dijisteis", "dijeron"],
        imp:  ["decía", "decías", "decía", "decíamos", "decíais", "decían"],
        fut:  ["diré", "dirás", "dirá", "diremos", "diréis", "dirán"]
      },
      note: "yo 变 digo，过去时词干 dij-，将来时 dir-"
    },
    {
      inf: "poner",
      meaning: "放、放置",
      group: "不规则",
      forms: {
        pres: ["pongo", "pones", "pone", "ponemos", "ponéis", "ponen"],
        pret: ["puse", "pusiste", "puso", "pusimos", "pusisteis", "pusieron"],
        imp:  ["ponía", "ponías", "ponía", "poníamos", "poníais", "ponían"],
        fut:  ["pondré", "pondrás", "pondrá", "pondremos", "pondréis", "pondrán"]
      },
      note: "yo 变 pongo，过去时词干 pus-"
    },
    {
      inf: "dar",
      meaning: "给",
      group: "不规则",
      forms: {
        pres: ["doy", "das", "da", "damos", "dais", "dan"],
        pret: ["di", "diste", "dio", "dimos", "disteis", "dieron"],
        imp:  ["daba", "dabas", "daba", "dábamos", "dabais", "daban"],
        fut:  ["daré", "darás", "dará", "daremos", "daréis", "darán"]
      },
      note: "归入 -er/-ir 式词尾，过去时无重音符号"
    },
    {
      inf: "conocer",
      meaning: "认识、了解",
      group: "不规则",
      forms: {
        pres: ["conozco", "conoces", "conoce", "conocemos", "conocéis", "conocen"],
        pret: ["conocí", "conociste", "conoció", "conocimos", "conocisteis", "conocieron"],
        imp:  ["conocía", "conocías", "conocía", "conocíamos", "conocíais", "conocían"],
        fut:  ["conoceré", "conocerás", "conocerá", "conoceremos", "conoceréis", "conocerán"]
      },
      note: "仅 yo 形式不规则：conozco，其余规则"
    },
    {
      inf: "dormir",
      meaning: "睡觉",
      group: "不规则",
      forms: {
        pres: ["duermo", "duermes", "duerme", "dormimos", "dormís", "duermen"],
        pret: ["dormí", "dormiste", "durmió", "dormimos", "dormisteis", "durmieron"],
        imp:  ["dormía", "dormías", "dormía", "dormíamos", "dormíais", "dormían"],
        fut:  ["dormiré", "dormirás", "dormirá", "dormiremos", "dormiréis", "dormirán"]
      },
      note: "o 变 ue，过去时第三人称 o 变 u"
    },
    {
      inf: "pedir",
      meaning: "请求、要求",
      group: "不规则",
      forms: {
        pres: ["pido", "pides", "pide", "pedimos", "pedís", "piden"],
        pret: ["pedí", "pediste", "pidió", "pedimos", "pedisteis", "pidieron"],
        imp:  ["pedía", "pedías", "pedía", "pedíamos", "pedíais", "pedían"],
        fut:  ["pediré", "pedirás", "pedirá", "pediremos", "pediréis", "pedirán"]
      },
      note: "e 变 i，过去时第三人称 e 变 i"
    }
  ]
};
