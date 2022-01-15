import { EditorCommand } from '@t/spec';
import Mark from '@/spec/mark';
import { toggleWrappingMark } from '@/markdown/helper/mdCommand';
import { DOMOutputSpecArray } from 'prosemirror-model';

const reParenthesis = /^(\().*([\s\S]*)(\))$/m;
const leftParenthesisSyntax = '(';
const rightParenthesisSyntax = ')';

export class Parenthesis extends Mark {
  get name() {
    return 'parenthesis';
  }

  get schema() {
    return {
      toDOM(): DOMOutputSpecArray {
        return ['span'];
      },
    };
  }

  commands(): EditorCommand {
    return toggleWrappingMark(reParenthesis, leftParenthesisSyntax, rightParenthesisSyntax);
  }

  keymaps() {
    const codeCommand = this.commands()();

    return { '(': codeCommand };
  }
}
