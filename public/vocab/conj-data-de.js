/* 德语动词变位 */
window.CONJ_DE = {
  lang: "de",
  label: "德语",
  persons: ["ich", "du", "er / sie / es", "wir", "ihr", "sie / Sie"],
  tenses: [["präs", "现在时"], ["prät", "过去时"], ["perf", "现在完成时"], ["fut", "将来时"]],
  verbs: [
    {
      inf: "machen",
      meaning: "做、制作",
      group: "规则（弱变化）",
      forms: {
        "präs": ["mache", "machst", "macht", "machen", "macht", "machen"],
        "prät": ["machte", "machtest", "machte", "machten", "machtet", "machten"],
        "perf": ["habe gemacht", "hast gemacht", "hat gemacht", "haben gemacht", "habt gemacht", "haben gemacht"],
        "fut":  ["werde machen", "wirst machen", "wird machen", "werden machen", "werdet machen", "werden machen"]
      },
      note: "弱变化，过去时词干加 -te"
    },
    {
      inf: "wohnen",
      meaning: "居住",
      group: "规则（弱变化）",
      forms: {
        "präs": ["wohne", "wohnst", "wohnt", "wohnen", "wohnt", "wohnen"],
        "prät": ["wohnte", "wohntest", "wohnte", "wohnten", "wohntet", "wohnten"],
        "perf": ["habe gewohnt", "hast gewohnt", "hat gewohnt", "haben gewohnt", "habt gewohnt", "haben gewohnt"],
        "fut":  ["werde wohnen", "wirst wohnen", "wird wohnen", "werden wohnen", "werdet wohnen", "werden wohnen"]
      },
      note: "弱变化，助动词用 haben"
    },
    {
      inf: "arbeiten",
      meaning: "工作",
      group: "规则（弱变化）",
      forms: {
        "präs": ["arbeite", "arbeitest", "arbeitet", "arbeiten", "arbeitet", "arbeiten"],
        "prät": ["arbeitete", "arbeitetest", "arbeitete", "arbeiteten", "arbeitetet", "arbeiteten"],
        "perf": ["habe gearbeitet", "hast gearbeitet", "hat gearbeitet", "haben gearbeitet", "habt gearbeitet", "haben gearbeitet"],
        "fut":  ["werde arbeiten", "wirst arbeiten", "wird arbeiten", "werden arbeiten", "werdet arbeiten", "werden arbeiten"]
      },
      note: "词干以 -t 结尾，需加 -e 连接"
    },
    {
      inf: "lernen",
      meaning: "学习",
      group: "规则（弱变化）",
      forms: {
        "präs": ["lerne", "lernst", "lernt", "lernen", "lernt", "lernen"],
        "prät": ["lernte", "lerntest", "lernte", "lernten", "lerntet", "lernten"],
        "perf": ["habe gelernt", "hast gelernt", "hat gelernt", "haben gelernt", "habt gelernt", "haben gelernt"],
        "fut":  ["werde lernen", "wirst lernen", "wird lernen", "werden lernen", "werdet lernen", "werden lernen"]
      },
      note: "弱变化，过去分词加 ge-"
    },
    {
      inf: "spielen",
      meaning: "玩、演奏",
      group: "规则（弱变化）",
      forms: {
        "präs": ["spiele", "spielst", "spielt", "spielen", "spielt", "spielen"],
        "prät": ["spielte", "spieltest", "spielte", "spielten", "spieltet", "spielten"],
        "perf": ["habe gespielt", "hast gespielt", "hat gespielt", "haben gespielt", "habt gespielt", "haben gespielt"],
        "fut":  ["werde spielen", "wirst spielen", "wird spielen", "werden spielen", "werdet spielen", "werden spielen"]
      },
      note: "弱变化，过去分词 ge- 加词干"
    },
    {
      inf: "haben",
      meaning: "有",
      group: "不规则（强变化）",
      forms: {
        "präs": ["habe", "hast", "hat", "haben", "habt", "haben"],
        "prät": ["hatte", "hattest", "hatte", "hatten", "hattet", "hatten"],
        "perf": ["habe gehabt", "hast gehabt", "hat gehabt", "haben gehabt", "habt gehabt", "haben gehabt"],
        "fut":  ["werde haben", "wirst haben", "wird haben", "werden haben", "werdet haben", "werden haben"]
      },
      note: "现在时 du/er 去 b，过去时 hatte"
    },
    {
      inf: "sein",
      meaning: "是",
      group: "系动词",
      forms: {
        "präs": ["bin", "bist", "ist", "sind", "seid", "sind"],
        "prät": ["war", "warst", "war", "waren", "wart", "waren"],
        "perf": ["bin gewesen", "bist gewesen", "ist gewesen", "sind gewesen", "seid gewesen", "sind gewesen"],
        "fut":  ["werde sein", "wirst sein", "wird sein", "werden sein", "werdet sein", "werden sein"]
      },
      note: "高度不规则，完成时助动词用 sein"
    },
    {
      inf: "werden",
      meaning: "变成",
      group: "系动词",
      forms: {
        "präs": ["werde", "wirst", "wird", "werden", "werdet", "werden"],
        "prät": ["wurde", "wurdest", "wurde", "wurden", "wurdet", "wurden"],
        "perf": ["bin geworden", "bist geworden", "ist geworden", "sind geworden", "seid geworden", "sind geworden"],
        "fut":  ["werde werden", "wirst werden", "wird werden", "werden werden", "werdet werden", "werden werden"]
      },
      note: "现在时 du/er 换元音，完成时用 sein"
    },
    {
      inf: "gehen",
      meaning: "走、去",
      group: "不规则（强变化）",
      forms: {
        "präs": ["gehe", "gehst", "geht", "gehen", "geht", "gehen"],
        "prät": ["ging", "gingst", "ging", "gingen", "gingt", "gingen"],
        "perf": ["bin gegangen", "bist gegangen", "ist gegangen", "sind gegangen", "seid gegangen", "sind gegangen"],
        "fut":  ["werde gehen", "wirst gehen", "wird gehen", "werden gehen", "werdet gehen", "werden gehen"]
      },
      note: "强变化，完成时助动词用 sein"
    },
    {
      inf: "kommen",
      meaning: "来",
      group: "不规则（强变化）",
      forms: {
        "präs": ["komme", "kommst", "kommt", "kommen", "kommt", "kommen"],
        "prät": ["kam", "kamst", "kam", "kamen", "kamt", "kamen"],
        "perf": ["bin gekommen", "bist gekommen", "ist gekommen", "sind gekommen", "seid gekommen", "sind gekommen"],
        "fut":  ["werde kommen", "wirst kommen", "wird kommen", "werden kommen", "werdet kommen", "werden kommen"]
      },
      note: "强变化，完成时助动词用 sein"
    },
    {
      inf: "sprechen",
      meaning: "说",
      group: "不规则（强变化）",
      forms: {
        "präs": ["spreche", "sprichst", "spricht", "sprechen", "sprecht", "sprechen"],
        "prät": ["sprach", "sprachst", "sprach", "sprachen", "spracht", "sprachen"],
        "perf": ["habe gesprochen", "hast gesprochen", "hat gesprochen", "haben gesprochen", "habt gesprochen", "haben gesprochen"],
        "fut":  ["werde sprechen", "wirst sprechen", "wird sprechen", "werden sprechen", "werdet sprechen", "werden sprechen"]
      },
      note: "现在时 du/er 由 e 变 i"
    },
    {
      inf: "fahren",
      meaning: "开车",
      group: "不规则（强变化）",
      forms: {
        "präs": ["fahre", "fährst", "fährt", "fahren", "fahrt", "fahren"],
        "prät": ["fuhr", "fuhrst", "fuhr", "fuhren", "fuhrt", "fuhren"],
        "perf": ["bin gefahren", "bist gefahren", "ist gefahren", "sind gefahren", "seid gefahren", "sind gefahren"],
        "fut":  ["werde fahren", "wirst fahren", "wird fahren", "werden fahren", "werdet fahren", "werden fahren"]
      },
      note: "现在时 du/er 变 ä，完成时用 sein"
    },
    {
      inf: "lesen",
      meaning: "阅读",
      group: "不规则（强变化）",
      forms: {
        "präs": ["lese", "liest", "liest", "lesen", "lest", "lesen"],
        "prät": ["las", "lasest", "las", "lasen", "last", "lasen"],
        "perf": ["habe gelesen", "hast gelesen", "hat gelesen", "haben gelesen", "habt gelesen", "haben gelesen"],
        "fut":  ["werde lesen", "wirst lesen", "wird lesen", "werden lesen", "werdet lesen", "werden lesen"]
      },
      note: "现在时 du/er 由 e 变 ie"
    },
    {
      inf: "essen",
      meaning: "吃",
      group: "不规则（强变化）",
      forms: {
        "präs": ["esse", "isst", "isst", "essen", "esst", "essen"],
        "prät": ["aß", "aßt", "aß", "aßen", "aßt", "aßen"],
        "perf": ["habe gegessen", "hast gegessen", "hat gegessen", "haben gegessen", "habt gegessen", "haben gegessen"],
        "fut":  ["werde essen", "wirst essen", "wird essen", "werden essen", "werdet essen", "werden essen"]
      },
      note: "现在时 du/er 由 e 变 i"
    },
    {
      inf: "nehmen",
      meaning: "拿、取",
      group: "不规则（强变化）",
      forms: {
        "präs": ["nehme", "nimmst", "nimmt", "nehmen", "nehmt", "nehmen"],
        "prät": ["nahm", "nahmst", "nahm", "nahmen", "nahmt", "nahmen"],
        "perf": ["habe genommen", "hast genommen", "hat genommen", "haben genommen", "habt genommen", "haben genommen"],
        "fut":  ["werde nehmen", "wirst nehmen", "wird nehmen", "werden nehmen", "werdet nehmen", "werden nehmen"]
      },
      note: "现在时 du/er 由 e 变 i，双写 m"
    },
    {
      inf: "geben",
      meaning: "给",
      group: "不规则（强变化）",
      forms: {
        "präs": ["gebe", "gibst", "gibt", "geben", "gebt", "geben"],
        "prät": ["gab", "gabst", "gab", "gaben", "gabt", "gaben"],
        "perf": ["habe gegeben", "hast gegeben", "hat gegeben", "haben gegeben", "habt gegeben", "haben gegeben"],
        "fut":  ["werde geben", "wirst geben", "wird geben", "werden geben", "werdet geben", "werden geben"]
      },
      note: "现在时 du/er 由 e 变 i"
    },
    {
      inf: "sehen",
      meaning: "看见",
      group: "不规则（强变化）",
      forms: {
        "präs": ["sehe", "siehst", "sieht", "sehen", "seht", "sehen"],
        "prät": ["sah", "sahst", "sah", "sahen", "saht", "sahen"],
        "perf": ["habe gesehen", "hast gesehen", "hat gesehen", "haben gesehen", "habt gesehen", "haben gesehen"],
        "fut":  ["werde sehen", "wirst sehen", "wird sehen", "werden sehen", "werdet sehen", "werden sehen"]
      },
      note: "现在时 du/er 由 e 变 ie"
    },
    {
      inf: "können",
      meaning: "能够",
      group: "情态动词",
      forms: {
        "präs": ["kann", "kannst", "kann", "können", "könnt", "können"],
        "prät": ["konnte", "konntest", "konnte", "konnten", "konntet", "konnten"],
        "perf": ["habe gekonnt", "hast gekonnt", "hat gekonnt", "haben gekonnt", "habt gekonnt", "haben gekonnt"],
        "fut":  ["werde können", "wirst können", "wird können", "werden können", "werdet können", "werden können"]
      },
      note: "情态动词，ich/er 无词尾"
    },
    {
      inf: "müssen",
      meaning: "必须",
      group: "情态动词",
      forms: {
        "präs": ["muss", "musst", "muss", "müssen", "müsst", "müssen"],
        "prät": ["musste", "musstest", "musste", "mussten", "musstet", "mussten"],
        "perf": ["habe gemusst", "hast gemusst", "hat gemusst", "haben gemusst", "habt gemusst", "haben gemusst"],
        "fut":  ["werde müssen", "wirst müssen", "wird müssen", "werden müssen", "werdet müssen", "werden müssen"]
      },
      note: "情态动词，ich/er 无词尾"
    },
    {
      inf: "wissen",
      meaning: "知道",
      group: "不规则（强变化）",
      forms: {
        "präs": ["weiß", "weißt", "weiß", "wissen", "wisst", "wissen"],
        "prät": ["wusste", "wusstest", "wusste", "wussten", "wusstet", "wussten"],
        "perf": ["habe gewusst", "hast gewusst", "hat gewusst", "haben gewusst", "habt gewusst", "haben gewusst"],
        "fut":  ["werde wissen", "wirst wissen", "wird wissen", "werden wissen", "werdet wissen", "werden wissen"]
      },
      note: "不规则，现在时 ich/er 为 weiß"
    }
  ]
};
