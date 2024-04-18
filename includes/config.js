const env = {
    declarationSchema: dataform.projectConfig.defaultSchema + '_' + dataform.projectConfig.schemaSuffix,
    translationDeclarationSchema: dataform.projectConfig.vars.translationDataset + '_' + dataform.projectConfig.schemaSuffix,
    thPaymentProjects: dataform.projectConfig.vars.thPaymentProjects
    
}    

module.exports = {
    env
};
