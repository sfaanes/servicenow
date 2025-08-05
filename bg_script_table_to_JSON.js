(function() {
    var tableName = "cmdb_ci_business_app"; // change this to your table
    var result = {
        name: tableName,
        label: new GlideRecord('sys_db_object').get('name', tableName) ? GlideRecord('sys_db_object').label.toString() : "",
        description: "",
        fields: {}
    };

    var dictGR = new GlideRecord('sys_dictionary');
    dictGR.addQuery('name', tableName);
    dictGR.addQuery('internal_type', '!=', 'collection');
    dictGR.orderBy('column_label');
    dictGR.query();

    while (dictGR.next()) {
        var fieldObj = {
            type: dictGR.internal_type.toString(),
            description: dictGR.column_label.toString()
        };

        // Add reference only if it has a value
        if (dictGR.internal_type.toString() == 'reference' && dictGR.reference) {
            fieldObj.reference_to = dictGR.reference.toString();
        }

        // Add choices only if it has options
        if (dictGR.internal_type.toString() == 'choice') {
            var choices = [];
            var choiceGR = new GlideRecord('sys_choice');
            choiceGR.addQuery('name', tableName);
            choiceGR.addQuery('element', dictGR.element);
            choiceGR.orderBy('sequence');
            choiceGR.query();
            while (choiceGR.next()) {
                choices.push({
                    value: choiceGR.value.toString(),
                    label: choiceGR.label.toString()
                });
            }
            if (choices.length > 0) {
                fieldObj.choices = choices;
            }
        }

        result.fields[dictGR.element.toString()] = fieldObj;
    }

    gs.info(JSON.stringify(result, null, 2));
})();
