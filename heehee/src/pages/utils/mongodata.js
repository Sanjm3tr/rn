export async function Mongodata (action, options){
    const result = await fetch(`https://ap-southeast-1.aws.data.mongodb-api.com/app/data-ntolo/endpoint/data/v1/action/${action}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'api-key': "s0EnLzSiy157YvgrtDVjR0WyvddxrwRRTCnteluAiN7ILSA2HZF97SIDldKVVYyk"
        },
        body: JSON.stringify({
            dataSource: "Cluster0",
            database: "rena1",  
            collection: 'test',
            ...options,
        }),
    }).then((res) => res.json());
return result
}