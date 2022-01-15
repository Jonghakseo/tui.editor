import { EditorCommand } from '@t/spec';
import Mark from '@/spec/mark';
import { toggleWrappingMark } from '@/markdown/helper/mdCommand';
import { DOMOutputSpecArray } from 'prosemirror-model';

const reBrace = /^({).*([\s\S]*)(})$/m;
const leftBraceSyntax = '{';
const rightBraceSyntax = '}';

export class Brace extends Mark {
  get name() {
    return 'brace';
  }

  get schema() {
    return {
      toDOM(): DOMOutputSpecArray {
        return ['span'];
      },
    };
  }

  commands(): EditorCommand {
    return toggleWrappingMark(reBrace, leftBraceSyntax, rightBraceSyntax);
  }

  keymaps() {
    const codeCommand = this.commands()();

    return { '{': codeCommand };
  }
}
