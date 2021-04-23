// Реляционные базы данных используют структурированный язык запросов (Structured Query Language, SQL) для определения и обработки данных. С одной стороны, это открывает большие возможности для разработки: SQL один из наиболее гибких и распространённых языков запросов, так что его выбор позволяет минимизировать ряд рисков, и будет особенно кстати, если предстоит работа с комплексными запросами. С другой стороны, в SQL есть ряд ограничений. Построение запросов на этом языке обязывает предопределять структуру данных и, как в случае с Городом А, последующее изменение структуры данных может быть губительным для всей системы.


// Нереляционные базы данных, в свою очередь, предлагают динамическую структуру данных, которые могут храниться несколькими способами: ориентированно по колонкам, документо-ориентированно, в виде графов или на основе пар «ключ-значение». Такая гибкость означает следующее:

// Вы можете создавать документы, не задавая их структуру заранее;
// Каждый документ может обладать собственной структурой;
// У каждой базы данных может быть собственный синтаксис;
// Вы можете добавлять поля прямо во время работы с данными.