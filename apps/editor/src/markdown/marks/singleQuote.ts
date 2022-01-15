import { EditorCommand } from '@t/spec';
import Mark from '@/spec/mark';
import { toggleWrappingMark } from '@/markdown/helper/mdCommand';
import { DOMOutputSpecArray } from 'prosemirror-model';

const reSingleQuote = /^(').*([\s\S]*)(')$/m;
const leftSingleQuote = "'";
const rightSingleQuote = "'";

export class SingleQuote extends Mark {
  get name() {
    return 'singleQuote';
  }

  get schema() {
    return {
      toDOM(): DOMOutputSpecArray {
        return ['span'];
      },
    };
  }

  commands(): EditorCommand {
    return toggleWrappingMark(reSingleQuote, leftSingleQuote, rightSingleQuote);
  }

  keymaps() {
    const codeCommand = this.commands()();

    return { "'": codeCommand };
  }
}
