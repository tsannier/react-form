var data = [
    {
        id: '7a8a3583-c987-4417-8cef-114274e463d5',
        type: 'questionnaire',
        canDrag: false,
        children: [
            {
                id: '7a869583-c987-4417-8cef-114274e463d5',
                type: 'chapitre',
                content: [
                    {
                        name: 'chapitre',
                        value: 'Identification des profils de risque'
                    }
                ],
                children: [
                    {
                        id: '53163502-1fea-45e3-88a2-49e9fb81d184',
                        type: 'sousTitre',
                        content: [
                            {
                                name: 'sousTitre',
                                value: 'Pays'
                            }
                        ],
                        children: [
                            {
                                id: 'b2ke3937-faac-4011-9405-0746cd03a5a3',
                                type: 'questionBool',
                                content: [
                                    {
                                        name: 'question',
                                        value: 'Est-ce que le risque de corruption dans le pays où la prestation doit être effectuée est élevé selon Transparency International (indice de perception de la corruption inférieur ou égal à 40)? cf.'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: '53dz3502-1fea-45e3-8vR2-49e9fb81d184',
                        type: 'sousTitre',
                        content: [
                            {
                                name: 'sousTitre',
                                value: 'Sélection du partenaire'
                            }
                        ],
                        children: [
                            {
                                id: 'b2ke3347-faac-4011-9405-0746cd03a5a3',
                                type: 'questionBool',
                                content: [
                                    {
                                        name: 'question',
                                        value: 'Est-ce que le partenaire a été recommandé par le client ?'
                                    }
                                ]
                            },
                            {
                                id: 'a2ke3347-faac-4011-9405-0746cd03a5a3',
                                type: 'questionBool',
                                content: [
                                    {
                                        name: 'question',
                                        value: 'Est-ce qu’il nous a été demandé, dans le cadre du contrat projeté, de faire une contribution politique ou caritative ?'
                                    }
                                ]
                            },
                            {
                                id: 'c2ke3347-faac-4011-9405-0746cd03a5a3',
                                type: 'questionBool',
                                content: [
                                    {
                                        name: 'question',
                                        value: 'A votre connaissance, est-ce que le partenaire a des liens familiaux ou d\'affaires avec des agents publics concernés par le projet?'
                                    }
                                ]
                            },
                            {
                                id: 'v2ke3347-faac-4011-9405-0746cd03a5a3',
                                type: 'questionBool',
                                content: [
                                    {
                                        name: 'question',
                                        value: 'Est-ce que les compétences techniques du partenaire ont été jugées adaptées (à partir de ses références notamment)?'
                                    }
                                ],
                                result: [
                                    {
                                        name: 'boolean',
                                        value: 'false'
                                    }
                                ]
                            },
                            {
                                id: 'k2ke3347-faac-4011-9405-0746cd03a5a3',
                                type: 'questionBool',
                                content: [
                                    {
                                        name: 'question',
                                        value: 'Est-ce que le partenaire a été recommandé par le client ?'
                                    }
                                ]
                            },
                            {
                                id: 'eb2ke3347-faac-4011-9405-0746cd03a5a3',
                                type: 'questionBool',
                                content: [
                                    {
                                        name: 'question',
                                        value: 'Est-ce que le partenaire a été recommandé par le client ?'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id: '1e36a772-5d87-446c-9f80-321a1f042f16',
                type: 'chapitre',
                content: [
                    {
                        name: 'chapitre',
                        value: 'Identification des mesures proposées pour réduire le risque'
                    }
                ],
                children: [
                    {
                        id: 'eb2ke3347-faac-4011-92905-0746cd03a5a3',
                        type: 'questionText',
                        content: [
                            {
                                name: 'question',
                                value: 'Est-ce que le partenaire a été recommandé par le client ?'
                            }
                        ]
                    },
                    {
                        id: 'eb2ke3347-faac-4201-9405-0746cd03a5a3',
                        type: 'questionText',
                        content: [
                            {
                                name: 'question',
                                value: 'Est-ce que le partenaire a été recommandé par le client ?'
                            }
                        ],
                        result: [
                            {
                                name: 'text',
                                value: 'Ma réponse'
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

Form.module(document.getElementById("container"), data, "execution");