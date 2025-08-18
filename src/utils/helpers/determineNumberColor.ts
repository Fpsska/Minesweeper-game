const valueToColors: Record<string, string> = {
    1: '#0B24FB',
    2: '#56AD54',
    3: '#FC0D1B',
    4: '#020B79',
    5: '#852123',
    6: '#278786',
    7: '#000000',
    8: '#808080'
};

export function determineColorByNumber(number: number): string {
    return valueToColors[number] || '#f500fdff';
}
