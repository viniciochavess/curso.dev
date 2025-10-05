test("testando uma falha, usando Jest",()=>{
    const result = 5+5
    expect(result).rejects
})

test("testando uma sucesso, usando Jest",()=>{
    const result = 5+5
    expect(result).resolves
})

test("testando uma calculo exando, usando Jest",()=>{
    const result = 5+5
    expect(result).toBe(10)
})