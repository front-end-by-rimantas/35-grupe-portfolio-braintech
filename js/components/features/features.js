function renderFeatures(selector, data) {
    const mandatoryObjKeys = ['title', 'desc'];
    const optionalObjKeys = ['icon'];
    const allObjKeys = [...mandatoryObjKeys, ...optionalObjKeys];
    const minKeysCount = mandatoryObjKeys.length;
    const maxKeysCount = minKeysCount + optionalObjKeys.length;

    if(typeof selector !== 'string') {
        return [true, 'Selectorius turi buti stringas'];
    }
    if(typeof selector === '') {
        return [true, 'Selectorius turi buti netuscias stringas'];
    }

    const DOM = document.querySelector(selector);

    if(!DOM) {
        return [true, 'pagal Selector, nepavyko rasti elemento'];
    }

    if(!Array.isArray(data)) {
        return [true, 'duomenys turi buti masyvo tipo'];
    }

    if(data.length === 0) {
        return [true, 'Duomenyse turi buti bent vienas objektas'];
    }

    let HTML = '';
    for (const item of data) {

        if (typeof item !== 'object'
        || item === null
        || Array.isArray(item)) {
        continue;
        }

        const keys = Object.keys(item);
        if (keys.length < minKeysCount || keys.length > maxKeysCount) {
            continue;
        }

        let correctObj = true;
        for (const key of keys) {
            if (!allObjKeys.includes(key)) {
                correctObj = false;
                break;
            }
        }
        if (!correctObj) {
            continue;
        }

        if (typeof item.title !== 'string'
            || item.title.trim() === '') {
            continue;
        }
        if (typeof item.desc !== 'string'
            || item.desc.trim() === '') {
            continue;
        }   

        HTML += `

        <div class="col-lg-6 features">
        <img src="../../../img/why-choose-us/${item.icon}.png" class="ico"></img>
        
            <div class="ico2">
                <h3 class="title">${item.title}</h3>
                <p class="description">${item.desc}</p>
            </div>
        </div>
        `;
    }

    if(HTML === '') {
        return [true, 'gautuose duomenyse nera teisingu duomenu'];
    }

    DOM.innerHTML = HTML;

    return [false, 'OK'];
    
}

export { renderFeatures };