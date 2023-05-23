export default abstract class Action {
    public readonly name: string;
    public readonly label: string;

    protected constructor(name: string, label: string) {
        this.name = name;
        this.label = label;
    }
}
